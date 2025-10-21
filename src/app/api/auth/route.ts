import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOption } from "./[...nextauth]/route";
import { Filter, Document } from "mongodb";

// expenseCollection POST data
export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        { success: false, message: "Request body is empty" },
        { status: 400 }
      );
    }

    // Connect Database
    const expenseCollection = await dbConnect(
      collectionNameObj.expenseCollection
    );
    // insert data
    const result = await expenseCollection.insertOne({
      ...body,
      createdAt: new Date(),
    });

    // Return success with inserted ID
    return NextResponse.json({
      success: true,
      message: "Expense added successfully",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }
};

// expenseCollection GET data
export const GET = async (req: Request) => {
  const session = await getServerSession(authOption);

  if (!session) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    // search section
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";

    const expenseCollection = await dbConnect(
      collectionNameObj.expenseCollection
    );

    // 2️⃣ Base query by user email
    const email = session.user?.email;
    const query: Filter<Document> = { email };
    // 3️⃣ Add search filters if search text exists
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ];
    }

    // 🔹 Debugging logs
    // console.log(query, "query");
    // console.log(search, "search");

    const result = await expenseCollection.find(query).toArray();

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch expenses" },
      { status: 500 }
    );
  }
};
