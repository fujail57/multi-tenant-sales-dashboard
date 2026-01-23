import React from "react";

export const FormSubmit = ({
  type = "submit",
  value = "Submit",
  isSubmitting = false,
}) => {
  return (
    <div>
      <input
        type={type}
        disabled={isSubmitting}
        value={isSubmitting ? `${value}...` : value}
        className="w-full bg-blue-500 text-white py-2 rounded font-medium hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
      />
    </div>
  );
};
