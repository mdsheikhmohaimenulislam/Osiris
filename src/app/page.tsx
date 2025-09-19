import { getSession, useSession } from "next-auth/react";

export default function Home() {
  // const session = useSession();
  const severSide = getSession();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1> Development Branch </h1>
      {/* {session && (
        <div className="mt-4 text-green-400">
          Logged in as: {JSON.stringify(session)}
        </div>
      )} */}
      {severSide && (
        <div className="mt-4 text-green-400">
          Logged in as: {JSON.stringify(severSide)}
        </div>
      )}
    </div>
  );
}
