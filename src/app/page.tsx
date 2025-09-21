<<<<<<< HEAD
import DashboardLayout from "@/components/DashboardLayout";
=======
// import { getServerSession } from "next-auth";
// import { authOption } from "./api/auth/[...nextauth]/route";
// import LogOutButton from "./components/LogOutButton";
>>>>>>> b38859f889b9ac89f8b0bae0051fa1c48f06921f

export default async function Home() {

  // const session = await getServerSession(authOption);

  return (
<<<<<<< HEAD
        <DashboardLayout>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Welcome to your Dashboard</h1>
        <p className="text-lg">Please select a section from the sidebar.</p>
      </div>
    </DashboardLayout>
=======
    <div className="font-sans grid  items-center justify-items-center min-h-screen   sm:p-20">

      {/* SocialLogin:
      {JSON.stringify(session)} */}
    </div>
>>>>>>> b38859f889b9ac89f8b0bae0051fa1c48f06921f
  );
}
