import React from "react";
import { FaChevronRight, FaMoneyBill } from "react-icons/fa";
import { Expense } from "../../expenses/page";
import Link from "next/link";

import ExpensesDeletedButton from "../ExpensesDeletedButton/page";

interface ExpensesFromDataProps {
  expense: Expense;
  onDeleted: () => Promise<void>;
}
const ExpensesFromData = ({ expense, onDeleted }: ExpensesFromDataProps) => {
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

          <div className="flex flex-col">
            {/* Action arrow details section */}
            <Link
              href={`/dashboard/expenses/${expense?._id}`}
              className="ml-4 btn mb-2 text-black btn-sm hover:bg-yellow-200 bg-white border-none"
            >
              <FaChevronRight size={20} />
            </Link>
            {/* Action arrow details section */}
            <p className="ml-4 btn btn-sm text-red-500 bg-white border-none hover:bg-red-600 hover:text-white">
              <ExpensesDeletedButton id={expense._id} onDeleted={onDeleted} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesFromData;
