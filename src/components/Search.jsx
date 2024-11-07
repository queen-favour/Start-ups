import React from "react";
import { CiSearch } from "react-icons/ci";

export default function Search({ searchQuery, onSearchChange }) {
  return (
    <div className="flex items-center border border-gray-100 rounded-md shadow-md p-3">
      <CiSearch className="text-gray-300 mr-2" />
      <input
        className="bg-transparent w-52 flex-grow outline-none placeholder-gray-400"
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search by Company name ..."
      />
    </div>
  );
}
