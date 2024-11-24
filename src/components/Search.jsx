import React from "react";

export default function Search({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search..."
      className="px-6 py-2 border border-gray-300 bg-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
    />
  );
}