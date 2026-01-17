import React from "react";

export const Unauthorized = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-red-600">Access Denied</h1>
        <p className="mb-6 text-gray-600">
          You do not have permission to view this page.
        </p>

        <div className="inline-flex items-center justify-center rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
          Unauthorized
        </div>
      </div>
    </div>
  );
};
