import React from "react";
import { useFormContext } from "react-hook-form";

export default function FormInput({
  name,
  label,
  type = "text",
  validation,
  placeholder,
  className,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={name}
          className="block text-normal font-medium "
        >
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        {...register(name, validation)}
        placeholder={placeholder}
        className={`${className} border border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
          errors[name] ? "border-red-500" : ""
        }`}
      />
      {errors[name] && (
        <p className="text-sm text-red-600 mt-1">{errors[name].message}</p>
      )}
    </div>
  );
}
