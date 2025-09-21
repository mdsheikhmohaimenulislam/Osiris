"use client";
import React, { FormEvent, useState } from "react";
// import { useSession } from "next-auth/react";
import { register } from "../actions/auth/register";
import { ILoginPayload } from "@/types/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SocialLogin from "../components/socialLogin/SocialLogin";
// import { register } from "../../actions/auth/register";

const Register = () => {
  // const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const router=useRouter()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const image = formData.get("image") as File;

    const payload: ILoginPayload & { username?: string; image?: File } = {
      email,
      password,
      username,
      image,
    };

    try {
      const response = await register(payload);

      if (response?.insertedId) {
        setMessage({
          type: "success",
          text: "Registration successful! Redirecting to login...",
        });
        const form = event.target as HTMLFormElement;
        form.reset();
        router.push('/')
      } else {
        // If backend returned null
        setMessage({ type: "error", text: "User already exists " });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Something went wrong. Try again later.",
      });
      console.error("Register Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-500">
          Create an account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium">Upload image</label>
            <input
              type="file"
              name="image"
              required
              minLength={3}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 
              focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">User Name</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              required
              minLength={3}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 
              focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 
              focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              minLength={6}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 
              focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg font-semibold transition 
              ${
                loading
                  ? "bg-green-800 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center text-sm font-medium ${
              message.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {message.text}
          </p>
        )}

        <p className="text-sm text-center mt-5 text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-green-500 hover:underline">
            Login
          </Link>
        </p>
        <SocialLogin/>
      </div>
    </div>
  );
};

export default Register;
