import React from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

export const UserRegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const handleSignupFormSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/user/register", data);
      alert("Signup successfully");
      reset();
      navigate("/");
    } catch (error) {
      console.log("Error: ", error);
      alert("Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh] px-4">
      <div className="w-full max-w-md border border-gray-300 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
          User Registration
        </h2>

        <form
          onSubmit={handleSubmit(handleSignupFormSubmit)}
          className="space-y-4"
        >
          <div>
            <input
              placeholder="Enter your name"
              type="text"
              {...register("name", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <input
              placeholder="Enter your email"
              type="email"
              {...register("email", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <input
              placeholder="Enter tenant name"
              type="text"
              {...register("tenantName", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <input
              placeholder="Enter your password"
              type="password"
              {...register("password", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <input
              type="submit"
              disabled={isSubmitting}
              value={isSubmitting ? "Submitting..." : "Register"}
              className="w-full bg-blue-500 text-white py-2 rounded font-medium hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
