import DashboardLayout from '@/components/DashboardLayout';
import Card from '@/components/ui/Card';
import Link from 'next/link';

export default function GroupsPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">My Groups</h2>
          <button className="btn btn-primary">
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
      </div>
    </DashboardLayout>
  );
}