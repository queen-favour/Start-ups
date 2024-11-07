import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Filters({
  options = [],
  selectedOption,
  onChange,
  placeholder = "",
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionSelect = (value) => {
    onChange(value);
    setIsDropdownOpen(false);
  };
  return (
    <div className="relative border border-gray-100 rounded-md shadow-md  text-white">
      {/* Button to toggle dropdown */}
      <button
        className="p-2 shadow-md rounded-md dark:bg-dark-blue flex justify-between items-center w-full"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span className="text-normal">
          {selectedOption ? selectedOption.displayName : placeholder}
        </span>
        <FaChevronDown
          className={`ml-2 transform transition-transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown options list */}
      {isDropdownOpen && (
        <ul className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-dark-blue shadow-md rounded-md z-10">
          {options.map(({ displayName, value }) => (
            <li
              key={value}
              onClick={() => handleOptionSelect(value)}
              className="p-2 hover:bg-gray-200 dark:hover:bg-dark-gray cursor-pointer"
            >
              {displayName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
