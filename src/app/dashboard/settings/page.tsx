import DashboardLayout from '@/components/DashboardLayout';
import Card from '@/components/ui/Card';

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-6">Settings</h2>
        <div className="tabs tabs-boxed mb-6">
          <a className="tab tab-active mr-4">Profile Info</a>
          <a className="tab mr-4">Password</a>
          <a className="tab mr-4">Preferences</a>
        </div>
        {/* Profile Info Section */}
        <Card title="Profile Information">
          <form className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input type="text" placeholder="John Doe" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input type="email" placeholder="john.doe@example.com" className="input input-bordered" disabled />
            </div>
            <div className="mt-6">
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </div>
          </form>
        </Card>
      </div>
    </DashboardLayout>
  );
}