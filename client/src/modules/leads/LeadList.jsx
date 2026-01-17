import { Navigate, useNavigate } from "react-router-dom";
import useGetApiQuery from "../../utils/useGetApiQuery";
import { Loading } from "../../components/Loading";
import { useAuth } from "../../authConfig/AuthContext";

export const LeadList = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { data, loading, error } = useGetApiQuery("/leads");

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

  return (
    <div className="flex justify-center px-4">
      <fieldset className="w-full max-w-6xl border border-gray-300 rounded-lg p-6">
        {/* Add lead -> only for admin */}

        {auth?.role === "admin" && (
          <button
            onClick={() => navigate("/lead/add")}
            className="px-3 py-1 mb-5 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Add new lead
          </button>
        )}

        <legend className="px-2 text-lg font-semibold text-gray-700">
          My Leads
        </legend>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Phone Number</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">View</th>
                {auth?.role === "admin" && (
                  <th className="border px-4 py-2">Update</th>
                )}
              </tr>
            </thead>

            <tbody>
              {data?.data?.map((leads, index) => {
                return (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="border px-4 py-2">{leads.name}</td>
                    <td className="border px-4 py-2">{leads.phone}</td>
                    <td className="border px-4 py-2 capitalize">
                      {leads.status}
                    </td>

                    <td className="border px-4 py-2">
                      <button
                        onClick={() => navigate(`/lead/view/${leads._id}`)}
                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        View
                      </button>
                    </td>

                    {auth.role === "admin" && (
                      <td className="border px-4 py-2">
                        <button
                          onClick={() => navigate(`/lead/edit/${leads._id}`)}
                          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                          Update
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </fieldset>
    </div>
  );
};
