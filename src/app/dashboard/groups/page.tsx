"use client";

import DashboardLayout from "@/components/DashboardLayout";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { useState } from "react";

export default function GroupsPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">My Groups</h2>
          {/* <button className="btn btn-primary">
            Create New Group
          </button> */}
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Create New Group
          </button>
        </div>
        {/* Existing Groups List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <h3 className="card-title text-xl">Roommates</h3>
            <p className="text-sm text-gray-500">3 members</p>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <span className="font-bold">You owe:</span>{" "}
                <span className="text-error font-bold"> $50.00</span>
              </div>
              <Link
                href="/dashboard/groups/roommates"
                className="btn btn-sm btn-outline btn-primary"
              >
                View
              </Link>
            </div>
          </Card>
          <Card>
            <h3 className="card-title text-xl">Vacation Fund</h3>
            <p className="text-sm text-gray-500">5 members</p>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <span className="font-bold">You are owed:</span>{" "}
                <span className="text-success font-bold"> $75.00</span>
              </div>
              <Link
                href="/dashboard/groups/vacation"
                className="btn btn-sm btn-outline btn-primary"
              >
                View
              </Link>
            </div>
          </Card>
          <Card>
            <h3 className="card-title text-xl">Family Budget</h3>
            <p className="text-sm text-gray-500">4 members</p>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <span className="font-bold">You are settled</span>
              </div>
              <Link
                href="/dashboard/groups/family"
                className="btn btn-sm btn-outline btn-primary"
              >
                View
              </Link>
            </div>
          </Card>
        </div>

        {/* Modal for Create Group */}
        {showModal && (
          <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
            <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-2xl border border-gray-200 relative animate-fadeIn">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold mb-6 text-center text-blue-600">
                Create New Group
              </h3>

              <form className="space-y-4">
                {/* Group Name */}
                <div>
                  <label className="block text-black text-sm font-semibold mb-1">
                    Group Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Trip to Cox’s Bazar"
                    className="input input-bordered bg-secondary text-black focus:text-white  w-full focus:outline-blue-400"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-black  text-sm font-semibold mb-1">
                    Description
                  </label>
                  <textarea
                    placeholder="Write a short description about the purpose of this group..."
                    className="textarea textarea-bordered bg-secondary text-black focus:text-white w-full h-20 focus:outline-blue-400"
                  ></textarea>
                </div>

                {/* Goal & Currency */}
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="block text-black text-sm font-semibold mb-1">
                      Goal Amount (optional)
                    </label>
                    <input
                      type="number"
                      placeholder="e.g., 10000"
                      className="input input-bordered bg-secondary text-black focus:text-white w-full focus:outline-blue-400"
                    />
                  </div>
                  <div className="w-32">
                    <label className="block text-black text-sm font-semibold mb-1">
                      Currency
                    </label>
                    <select className="select select-bordered bg-secondary text-black focus:text-white w-full focus:outline-blue-400">
                      <option value="BDT">BDT</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                    </select>
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-black text-sm font-semibold mb-1">
                    Category
                  </label>
                  <select className="select select-bordered bg-secondary text-black focus:text-white w-full focus:outline-blue-400">
                    <option>Travel</option>
                    <option>Office</option>
                    <option>Friends</option>
                    <option>Event</option>
                    <option>Family</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Add Members */}
                <div>
                  <label className="block text-black text-sm font-semibold mb-1">
                    Add Members
                  </label>
                  <input
                    type="text"
                    placeholder="Enter emails or usernames, separated by commas"
                    className="input input-bordered bg-secondary text-black focus:text-white w-full focus:outline-blue-400"
                  />
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="btn btn-outline btn-sm bg-red-400 rounded-2xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm text-white rounded-2xl bg-primary hover:bg-blue-700 border-none"
                  >
                    Create Group
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
