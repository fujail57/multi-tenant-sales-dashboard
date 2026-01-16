import React from "react";

export const Home = ({ tenant, role }) => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">
        Sales Dashboard
      </h1>

      <p className="text-gray-600 mb-6">
        Welcome to your workspace. Below is your current context.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-500 mb-1">Current Tenant</p>
          <p className="text-lg font-medium text-gray-900">
            {tenant || "Organization A"}
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-500 mb-1">Your Role</p>
          <p className="text-lg font-medium text-gray-900">{role || "Agent"}</p>
        </div>
      </div>
    </div>
  );
};
