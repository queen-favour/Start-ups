import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-8">
        <div>
          <a href="/" className="font-bold text-2xl">
            THE STARTUPS
          </a>
        </div>
        <div className="hidden md:flex gap-8 text-xl">
          <a href="/">Startups</a>
          <a href="/investors">Investors</a>
          <a href="/partners">Partners</a>
          <a href="/exhibitors">Exhibitors</a>
          <a href="/profile">Manage Profile</a>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      <div
        className={`
        fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        md:hidden
        z-50
      `}
      >
        <div className="p-8">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col gap-6 mt-12 text-xl">
            <a href="/" className="hover:text-gray-600">
              Startups
            </a>
            <a href="/investors" className="hover:text-gray-600">
              Investors
            </a>
            <a href="/partners" className="hover:text-gray-600">
              Partners
            </a>
            <a href="/exhibitors" className="hover:text-gray-600">
              Exhibitors
            </a>
            <a href="/profile" className="hover:text-gray-600">
              Manage Profile
            </a>
          </div>
        </div>
      </div>
      <div
        className={`
          fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          md:hidden
          z-40
        `}
        onClick={toggleMenu}
      />

      <hr className="border-t border-gray-100 w-full" />
    </div>
  );
};

export default NavBar;
