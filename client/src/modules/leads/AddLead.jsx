import React from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../utils/axiosInstance";
import { Navigate, useNavigate } from "react-router-dom";

export const AddLeads = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const handleAddFormSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/lead-add", data);
      alert("New lead added Successfully");
      reset();
      navigate("/leads");
    } catch (error) {
      console.log("lead can't add", error);
      alert("Leads can't add");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh] px-4">
      <div className="w-full max-w-md border border-gray-300 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
          Add New Leads
        </h2>

        <form
          onSubmit={handleSubmit(handleAddFormSubmit)}
          className="space-y-4"
        >
          <div>
            <input
              placeholder="Enter name"
              type="text"
              {...register("name", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <input
              placeholder="Enter phone number"
              type="number"
              {...register("phone", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <select
              {...register("status")}
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="new">New</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div>
            <input
              type="submit"
              disabled={isSubmitting}
              value={isSubmitting ? "Submitting..." : "Submit"}
              className="w-full bg-blue-500 text-white py-2 rounded font-medium hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
            />
          </div>
        </form>
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
