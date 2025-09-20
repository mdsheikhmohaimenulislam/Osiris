"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [animationData, setAnimationData] = useState<any>(null);

  // Fetch Lottie JSON from public folder
  useEffect(() => {
    fetch("/animations/LoginCharacterAnimation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.success("🎉 Login successful!");
  };

  return (
    <div className=" bg-[#e1f4f3] min-w-screen flex justify-around">
      {/* Left Side - Animation */}
      <div className="hidden md:block">
        {animationData && (
          <Lottie
            animationData={animationData}
            loop={true}
            className=" w-100 h-100 lg:w-170 lg:h-170"
          />
        )}
      </div>

      {/* Right Side - Form */}
      <div className="md:w-1/2 flex  justify-center items-center p-8    ">
        <div className="w-full   max-w-md p-10 rounded-2xl shadow-2xl text-black">
          <h2 className="text-3xl font-bold text-center mb-6">
            Login <span className="text-blue-600">Now</span>
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="
    w-full px-4 py-2 border border-blue-600 rounded
    
    
  
    focus:bg-blue-400
    focus:text-white
    
  "
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-blue-600 rounded  focus:bg-blue-400
    focus:text-white "
                  required
                  name="password"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl text-gray-500"
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Login
            </button>
          </form>

          {/* Optional Social Login Placeholder */}
          <div className="text-center mt-4">
            <button
              type="button"
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
            >
              Login with Google
            </button>
          </div>

          <p className="text-center mt-6">
            Don’t have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
