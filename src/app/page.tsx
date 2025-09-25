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
          <h1 className="text-3xl font-bold text-black mb-6">
            Welcome to your Dashboard
          </h1>
          <p className="text-lg text-black">
            Please select a section from the sidebar.
          </p>
        </div>
      </DashboardLayout>

      <div className="font-sans grid items-center justify-items-center min-h-screen sm:p-20">
        {/* Add content here */}
      </div>
    </>
  );
}
