import React from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../utils/axiosInstance";

export const UserLoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const handleLoginFormSubmit = async (data) => {
    try {
      await axiosInstance.post("/user/login", data);
      alert("User login successfully!");
      reset();
      Navigate("/");
    } catch (error) {
      alert("User login failed", { message: error.message });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh] px-4">
      <div className="w-full max-w-md border border-gray-300 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
          User Login
        </h2>

        <form
          onSubmit={handleSubmit(handleLoginFormSubmit)}
          className="space-y-4"
        >
          <div className="flex flex-col gap-1">
            <input
              placeholder="example@gmail.com"
              type="email"
              {...register("email", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <input
              placeholder="Password..."
              type="password"
              {...register("password", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <input
              type="submit"
              disabled={isSubmitting}
              value={isSubmitting ? "Signing in..." : "Login"}
              className="w-full bg-blue-500 text-white py-2 rounded font-medium hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
