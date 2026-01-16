import React from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../utils/axiosInstance";
import { Navigate } from "react-router-dom";

export const TenantLoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const handleLoginFormSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/auth/login", data);
      alert("Login Successfully");
      reset();
      Navigate("/");
    } catch (error) {
      console.log("Error: ", error);
      alert("Login Failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh] px-4">
      <div className="w-full max-w-md border border-gray-300 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
          Tenant Login
        </h2>

        <form
          onSubmit={handleSubmit(handleLoginFormSubmit)}
          className="space-y-4"
        >
          <div>
            <input
              placeholder="Enter email"
              type="email"
              {...register("email", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <input
              placeholder="Enter password"
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
