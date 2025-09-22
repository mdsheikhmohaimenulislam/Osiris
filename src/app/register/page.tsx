"use client";
<<<<<<< HEAD

import { useState, useEffect } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [animationData, setAnimationDate] = useState<any>(null);
  useEffect(() => {
    fetch("/animations/RegistrationAnimation.json")
      .then((res) => res.json())
      .then((data) => setAnimationDate(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      currentPassword: { value: string };
      photoURL: { value: string };
    };

    const name = target.name.value;
    const email = target.email.value;
    const password = target.currentPassword.value;
    const photo = target.photoURL.value;

    // Password validation
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    if (!passwordRegExp.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and include one uppercase letter and one special character."
      );
      return;
=======
import React, { FormEvent, useState } from "react";
import { register } from "../actions/auth/register";
import { ILoginPayload } from "@/types/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SocialLogin from "../components/socialLogin/SocialLogin";
import { imageUpload } from "../components/utils";
import toast from "react-hot-toast";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);
    setLoading(true);


    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const imageFile = formData.get("image") as File | null;

    // Upload the image and get the URL
    let imageUrl: string | undefined;

    if (imageFile) {
      imageUrl = await imageUpload(imageFile); //  imageUpload gets a File
    }

    // Prepare the payload
    const payload: ILoginPayload & { username?: string; image?: string } = {
      email,
      password,
      username,
      image: imageUrl ?? undefined, //  converts null to undefined
    };

    try {
      const response = await register(payload);

      if (response?.insertedId) {
        setMessage({
          type: "success",
          text: "Registration successful! Redirecting to login...",
        });
        const form = event.target as HTMLFormElement;
        toast.success("Logged out successfully!");
        form.reset();
        router.push("/");
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

>>>>>>> 13b01de1561880de897fdbb4a7b2d6668ed74c91
    }
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen flex items-center bg-[#e1f4f3]">
      {/* Left Side - Lottie Animation */}
      <div className=" md:block">
        {animationData && (
          <Lottie
            animationData={animationData}
            loop={true}
            className=" w-100 h-100 lg:w-170 lg:h-170"
          />
        )}
      </div>

      {/* Right Side - Form */}
      <div className="md:w-1/2 flex flex-col justify-center items-center p-8 text-black">
        <div className="w-full max-w-md p-10 rounded-2xl shadow-2xl bg-[#e1f4f3]">
          <h2 className="text-3xl font-bold text-center mb-6">
            Register <span className="text-blue-600">Now</span>
          </h2>

          <form onSubmit={handleRegister} className="space-y-4 w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full px-4 py-2 border border-blue-600 rounded focus:bg-blue-300 focus:text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 border border-blue-600 rounded  focus:bg-blue-300 focus:text-white"
            />
            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL"
              required
              className="w-full px-4 py-2 border border-blue-600 rounded  focus:bg-blue-300 focus:text-white"
            />

            <input
              type="text"
              name="currentPassword"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border border-blue-600 rounded focus:bg-blue-300 focus:text-white"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white  py-2 rounded hover:bg-blue-700 mt-2"
            >
              Register
            </button>
          </form>

          <button
            type="button"
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 mt-4"
          >
            Register with Google
          </button>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
=======
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-500">
          Create an account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Profile Image
            </label>
            <input
              type="file"
              name="image"
              required
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
        <SocialLogin />
>>>>>>> 13b01de1561880de897fdbb4a7b2d6668ed74c91
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default RegisterPage;
=======
export default Register;
>>>>>>> 13b01de1561880de897fdbb4a7b2d6668ed74c91
