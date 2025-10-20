import React from "react";
import { FaChevronRight, FaMoneyBill } from "react-icons/fa";
import { Expense } from "../../expenses/page";
import Link from "next/link";

interface ExpensesFromDataProps {
  expense: Expense;
}
const ExpensesFromData = ({ expense }: ExpensesFromDataProps) => {
  // console.log(expense);

  return (
    <div>
      {/* Expenses List */}
      <div className="space-y-4 mt-5">
        <div className="flex items-center  border-2  hover:scale-102 transition-transform hover:shadow-2xl justify-between bg-white shadow-md p-4 rounded-lg">
          {/* Left icon */}
          <FaMoneyBill className="text-green-600 text-xl" />

          {/* Middle info */}
          <div className="flex-1  text-black px-4">
            <h3 className=" font-semibold text-black">{expense?.title}</h3>
            <p className="text-sm text-gray-500">{expense?.notes}</p>
          </div>

          {/* Right side */}
          <div className="text-right">
            <p className="font-bold text-error">${expense?.amount}</p>
            <p className="text-xs text-gray-500">{expense?.date}</p>
          </div>

          {/* Action arrow */}
          <Link
            href={`/dashboard/expenses/${expense?._id}`}
            className="ml-4 btn btn-sm btn-ghost"
          >
            <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpensesFromData;
