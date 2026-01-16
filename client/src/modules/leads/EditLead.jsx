import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import useGetApiQuery from "../../utils/useGetApiQuery";
import { Loading } from "../../components/Loading";

export const EditLead = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const { data, loading, error } = useGetApiQuery(`/lead/${id}`);

  useEffect(() => {
    if (data) {
      reset({
        name: data?.data?.name,
        phone: data?.data?.phone,
        status: data?.data?.status,
      });
    }
  }, [data, reset]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-300px">
        <Loading />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center text-red-600">
        Error: {error.message}
      </div>
    );

  const handleUpdateFormSubmit = async (data) => {
    try {
      const response = await axiosInstance.put(`/lead/${id}`, data);
      console.log("Lead updated Successfully", response.data);
      alert("Lead updated Successfully");
      navigate("/leads");
    } catch (error) {
      console.log("Lead update failed", error);
      alert("Lead update failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh] px-4">
      <div className="w-full max-w-md border border-gray-300 rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="px-3 py-1 border rounded hover:bg-gray-100"
          >
            ←
          </button>
          <h2 className="text-lg font-semibold text-gray-800">
            Update Lead Status
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(handleUpdateFormSubmit)}
          className="space-y-4"
        >
          <div>
            <input
              placeholder="Enter name"
              type="text"
              disabled
              {...register("name")}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <input
              placeholder="Enter phone"
              disabled
              type="number"
              {...register("phone")}
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
              value={isSubmitting ? "Updating..." : "Update"}
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
