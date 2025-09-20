"use client";

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
    }
  };

  return (
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
      </div>
    </div>
  );
};

export default RegisterPage;
