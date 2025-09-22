import DashboardLayout from '@/components/DashboardLayout';

export default function BalancesPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Balances</h2>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Example Balances Card */}
          <div className="stats shadow bg-base-100">
            <div className="stat">
              <div className="stat-title">Current Balance</div>
              <div className="stat-value text-success">$2,500.00</div>
              <div className="stat-desc">From previous month</div>
            </div>
          </div>
          <div className="stats shadow bg-base-100">
            <div className="stat">
              <div className="stat-title">Total Income</div>
              <div className="stat-value">$3,000.00</div>
              <div className="stat-desc">This month</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}