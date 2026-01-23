import React from "react";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md bg-white rounded-lg shadow p-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <button
          onClick={() => navigate("/")}
          className="inline-block bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};
