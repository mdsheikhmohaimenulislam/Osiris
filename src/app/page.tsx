import { getServerSession } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { authOption } from "./api/auth/[...nextauth]/route";

export default async  function Home() {
  // const session = useSession();
const session = await getServerSession(authOption);
console.log(session)


  const severSide = getSession();
  console.log(severSide)


  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1> Development Branch </h1>
      {severSide && (
        <div className="mt-4 text-green-400">
          Logged in as: {JSON.stringify(severSide)}
        </div>
      )}

      {
        JSON.stringify(session)
      }
    </div>
  );
}
