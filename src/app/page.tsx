import DashboardLayout from "@/components/DashboardLayout";

export default async function Home() {

  return (
    <>
    
      <DashboardLayout>
        
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-black mb-6">
            Welcome to your Dashboard
          </h1>
          <p className="text-lg text-black">
            Please select a section from the sidebar.
          </p>
        </div>
      </DashboardLayout>
    </>
  );
}
