import DashboardLayout from "@/components/DashboardLayout";
// import { getServerSession } from "next-auth";
// import { authOption } from "./api/auth/[...nextauth]/route";
// import LogOutButton from "./components/LogOutButton";

export default async function Home() {

  // const session = await getServerSession(authOption);

  return (
    <>
      <DashboardLayout>
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Welcome to your Dashboard</h1>
          <p className="text-lg">Please select a section from the sidebar.</p>
        </div>
      </DashboardLayout>

      <div>
        {/* Add content here */}
      </div>
    </>
  );
}
