import React from "react";

export const FormInput = ({
  label,
  type = "text",
  placeholder,
  name,
  register,
  className,
  disabled = false,
}) => {
  return (
    <div>
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-950">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name)}
        className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-950 ${className}`}
      />
    </div>
  );
};
