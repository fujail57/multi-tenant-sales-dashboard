import useGetApiQuery from "../../utils/useGetApiQuery";
import { Loading } from "../../components/Loading";

export const MyCallLogs = () => {
  const { data, loading, error } = useGetApiQuery("/my-logs");

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-300px">
        <Loading />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center text-red-600">
        Error: {error.message}
      </div>
    );

  return (
    <div className="flex justify-center px-4">
      <fieldset className="w-full max-w-6xl border border-gray-300 rounded-lg p-6">
        <legend className="px-2 text-lg font-semibold text-gray-700">
          Call Log List
        </legend>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Duration</th>
                <th className="border px-4 py-2">Outcome</th>
              </tr>
            </thead>

            <tbody>
              {data?.data?.map((logs, index) => {
                return (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="border px-4 py-2">{logs.date}</td>
                    <td className="border px-4 py-2">{logs.name}</td>
                    <td className="border px-4 py-2">{logs.duration}</td>
                    <td className="border px-4 py-2">{logs.outcome}</td>
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
