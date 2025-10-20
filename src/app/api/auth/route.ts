import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

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
