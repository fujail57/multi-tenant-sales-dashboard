import React from "react";

export const Loading = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-center">
        <div className="mb-3 h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900 mx-auto"></div>
        <p className="text-sm text-gray-600">Loading...</p>
      </div>
    </div>
  );
};
