import DashboardLayout from '@/components/DashboardLayout';
import Card from '@/components/ui/Card';

export default function ExpensesPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Using Card component */}
          <Card title="Groceries">
            <p className="text-xl font-bold text-error">-$125.50</p>
            <p className="text-sm text-gray-500">September 19, 2025</p>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-sm btn-outline btn-primary">Details</button>
            </div>
          </Card>
          <Card title="Utilities">
            <p className="text-xl font-bold text-error">-$85.00</p>
            <p className="text-sm text-gray-500">September 18, 2025</p>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-sm btn-outline btn-primary">Details</button>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}