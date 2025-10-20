import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOption } from "../../auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";

//? Expense find single data
// export const GET = async (
//   req: Request,
//   { params }: { params: { id: string } }
// ) => {
//   try {
//     const expenseCollection = await dbConnect(
//       collectionNameObj.expenseCollection
//     );

//     // Find the expense by ID
//     const result = await expenseCollection.findOne({
//       _id: new ObjectId(params.id),
//     });

//     if (!result) {
//       return NextResponse.json(
//         { success: false, message: "Expense not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({ success: true, data: result });
//   } catch (error) {
//     console.error("Error fetching expense:", error);
//     return NextResponse.json(
//       { success: false, message: "Failed to fetch expense" },
//       { status: 500 }
//     );
//   }
// };

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const expenseCollection = await dbConnect(
      collectionNameObj.expenseCollection
    );
    const query = { _id: new ObjectId(params.id) };
 
    //  Validate ownership
    const session = await getServerSession(authOption);
    if (!session || !session.user?.email) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const currentExpense = await expenseCollection.findOne(query);
    if (!currentExpense) {
      return NextResponse.json(
        { success: false, message: "Expense not found" },
        { status: 404 }
      );
    }

    if (session?.user?.email !== currentExpense?.email) {
      return NextResponse.json(
        { success: false, message: "Forbidden Action" },
        { status: 403 }
      );
    }

    //  Delete the expense
    const deleteResult = await expenseCollection.deleteOne(query);
    revalidatePath("/dashboard/expenses");

    return NextResponse.json({
      success: deleteResult.deletedCount > 0,
      message:
        deleteResult.deletedCount > 0 ? "Expense deleted" : "Nothing deleted",
    });
  } catch (error) {
    console.error("Error deleting expense:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete expense" },
      { status: 500 }
    );
  }
};
