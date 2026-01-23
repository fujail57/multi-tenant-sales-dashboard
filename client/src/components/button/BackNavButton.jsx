import React from "react";
import { useNavigate } from "react-router-dom";

export const BackNavButton = ({ name = "←" }) => {
  const navigate = useNavigate();
  return (
    <div className="mt-6 text-center">
      <button
        onClick={() => navigate(-1)}
        className="px-3 py-1 border rounded hover:bg-gray-100"
      >
        {name}
      </button>
    </div>
  );
};
