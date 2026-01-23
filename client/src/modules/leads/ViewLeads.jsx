import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetApiQuery from "../../utils/useGetApiQuery";
import { Loading } from "../../components/Loading";
import { useQuery } from "@tanstack/react-query";
import { getApiQuery } from "../../utils/apiQuery";

export const ViewLeads = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // const { data, loading, error } = useGetApiQuery(`/lead/${id}`);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["lead", id],
    queryFn: () => getApiQuery(`/lead/${id}`),
  });

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

  return (
    <div className="flex justify-center items-center min-h-[60vh] px-4">
      <fieldset className="w-full max-w-md border border-gray-300 rounded-lg p-6 shadow-sm">
        <legend className="px-2 text-lg font-semibold text-gray-700">
          View Lead
        </legend>

        <div className="space-y-3 text-gray-800">
          <p>
            <span className="font-medium">ID:</span> {id}
          </p>
          <p>
            <span className="font-medium">Name:</span> {data?.data?.name}
          </p>
          <p>
            <span className="font-medium">Phone:</span> {data?.data?.phone}
          </p>
          <p>
            <span className="font-medium">Status:</span>{" "}
            <span className="capitalize">{data?.data?.status}</span>
          </p>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Back
          </button>
        </div>
      </fieldset>
    </div>
  );
};
