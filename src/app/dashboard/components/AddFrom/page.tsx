import { Session } from "next-auth";
import { FormEvent } from "react";

interface AddFromProps {
  handleFromSubmit: (e: FormEvent<HTMLFormElement>) => void;
  session: Session | null;
}

export default function AddFrom({ handleFromSubmit, session }: AddFromProps) {
  return (
    <div className=" m-10  p-10 bg-secondary rounded-3xl shadow-2xl border-2 border-red-300 text-gray-800">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">
        Create New Expense
      </h1>

      <form onSubmit={handleFromSubmit} className="space-y-12">
        {/* Expense Info */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700 border-b border-gray-200 pb-2">
            Expense Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2">Expense Title</label>
              <input
                type="text"
                name="title"
                placeholder="Monday evening restaurant"
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Expense Date</label>
              <input
                type="date"
                name="date"
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Currency</label>
              <select
                name="currency"
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              >
                <option value="USD">US Dollar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="BDT">Bangladeshi Taka (BDT)</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-2">Category</label>
              <select
                name="category"
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              >
                <option>General</option>
                <option>Food</option>
                <option>Travel</option>
                <option>Shopping</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-2">Amount</label>
              <input
                type="number"
                name="amount"
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Income</label>
              <input
                type="number"
                name="amount"
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-2">Description</label>
            <textarea
              name="description"
              placeholder="Enter a description for the expense."
              className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition min-h-[100px]"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">User Gmail</label>
            <input
              type="email"
              name="email"
              defaultValue={session?.user?.email ?? ""}
              readOnly
              className="w-full p-4 border border-gray-300 rounded-xl shadow-sm transition"
            />
          </div>
        </section>

        {/* Payment Info */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700 border-b border-gray-200 pb-2">
            Payment Information
          </h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="reimbursement"
                className="w-5 h-5 accent-blue-500"
              />
              <label className="font-medium">This is a reimbursement</label>
            </div>

            <div>
              <label className="block font-medium mb-2">Paid By</label>
              <div>
                <input
                  type="text"
                  name="PaidBy"
                  placeholder="Paid By name"
                  className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-2">Notes</label>
              <textarea
                name="notes"
                placeholder="Optional notes..."
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition min-h-[80px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-2">
                  Expense Recurrence
                </label>
                <select
                  name="expense"
                  className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                >
                  <option>None</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-2">Split Mode</label>
                <select
                  name="splitMode"
                  className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                >
                  <option>Evenly</option>
                  <option>Custom</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Participants */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700 border-b border-gray-200 pb-2">
            Participants
          </h2>

          <div>
            <input
              type="text"
              name="Participants"
              placeholder="Participants name"
              className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            />
          </div>
        </section>

        {/* Submit */}
        <div className="flex justify-end gap-4 pt-6 ">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-medium"
          >
            Create Expense
          </button>
        </div>
      </form>
    </div>
  );
}
