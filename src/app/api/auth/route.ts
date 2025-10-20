import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOption } from "./[...nextauth]/route";

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
    const email = session.user?.email;
    const expenseCollection = await dbConnect(
      collectionNameObj.expenseCollection
    );
    const result = await expenseCollection.find({ email }).toArray();

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch expenses" },
      { status: 500 }
    );
  }
};
