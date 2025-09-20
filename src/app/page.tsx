// import { getServerSession } from "next-auth";
// import { authOption } from "./api/auth/[...nextauth]/route";
// import LogOutButton from "./components/LogOutButton";

export default async function Home() {

  // const session = await getServerSession(authOption);

  return (
    <div className="font-sans grid  items-center justify-items-center min-h-screen   sm:p-20">

      {/* SocialLogin:
      {JSON.stringify(session)} */}
    </div>
  );
}
