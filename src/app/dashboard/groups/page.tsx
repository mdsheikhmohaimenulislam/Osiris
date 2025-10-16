"use client";

import DashboardLayout from '@/components/DashboardLayout';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import { useState } from 'react';

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
                <span className="font-bold">You owe:</span> <span className="text-error font-bold"> $50.00</span>
              </div>
              <Link href="/dashboard/groups/roommates" className="btn btn-sm btn-outline btn-primary">
                View
              </Link>
            </div>
          </Card>
          <Card>
            <h3 className="card-title text-xl">Vacation Fund</h3>
            <p className="text-sm text-gray-500">5 members</p>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <span className="font-bold">You are owed:</span> <span className="text-success font-bold"> $75.00</span>
              </div>
              <Link href="/dashboard/groups/vacation" className="btn btn-sm btn-outline btn-primary">
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
              <Link href="/dashboard/groups/family" className="btn btn-sm btn-outline btn-primary">
                View
              </Link>
            </div>
          </Card>
        </div>

        {/* Modal for Create Group */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Create Social Group</h3>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Group Name"
                  className="input input-bordered w-full"
                />
                <input
                  type="number"
                  placeholder="Goal Amount (optional)"
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  placeholder="Add Members (emails or usernames)"
                  className="input input-bordered w-full"
                />
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Create
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