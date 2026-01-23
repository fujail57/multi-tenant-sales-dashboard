import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import useGetApiQuery from "../../utils/useGetApiQuery";
import { Loading } from "../../components/Loading";
import { FormInput } from "../../components/form/FormInput";
import { BackNavButton } from "../../components/button/BackNavButton";
import { FormSubmit } from "../../components/form/FormSubmit";
import { useQuery } from "@tanstack/react-query";
import { getApiQuery } from "../../utils/apiQuery";

export const EditLead = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  // const { data, loading, error } = useGetApiQuery(`/lead/${id}`);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["lead", id],
    queryFn: () => getApiQuery(`/lead/${id}`),
  });

  useEffect(() => {
    if (data) {
      reset({
        name: data?.data?.name,
        phone: data?.data?.phone,
        status: data?.data?.status,
      });
    }
  }, [data, reset]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-300px">
        <Loading />
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center text-red-600">
        Error: {error.message}
      </div>
    );

  const handleUpdateFormSubmit = async (data) => {
    try {
      const response = await axiosInstance.put(`/lead/${id}`, data);
      // console.log("Lead updated Successfully", response.data);
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
          <BackNavButton />
          <h2 className="text-lg font-semibold text-gray-800">
            Update Lead Status
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(handleUpdateFormSubmit)}
          className="space-y-4"
        >
          <div>
            <FormInput
              placeholder="Enter name"
              name="name"
              register={register}
              disabled
            />
          </div>

          <div>
            <FormInput
              placeholder="Enter phone"
              type="number"
              disabled
              name="phone"
              register={register}
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

          {/* <div>
            <input
              type="submit"
              disabled={isSubmitting}
              value={isSubmitting ? "Updating..." : "Update"}
              className="w-full bg-blue-500 text-white py-2 rounded font-medium hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
            />
          </div> */}

          <div>
            <FormSubmit value="Update" isSubmitting={isSubmitting} />
          </div>
        </form>

        <BackNavButton name="Back" />
      </div>
    </div>
  );
};
