"use client";
import React, { FormEvent } from "react";
import { signIn, useSession } from "next-auth/react";

const Register = () => {
  const session = useSession();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const promise = await signIn("credentials", {
      redirect: false,
    });

    console.log(promise);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create an account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm">User Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="username"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition-colors py-2 rounded-lg font-semibold"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center mt-5 text-gray-400">
          Already have an account?{" "}
          <a href="/auth/login" className="text-green-500 hover:underline">
            Login
          </a>
        </p>
        {session.status === "authenticated" && (
          <div className="mt-4 text-green-400">
            Logged in as: {JSON.stringify(session.data.user)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
