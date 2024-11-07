import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Filters from "../Filters";

export default function NavBar() {
  return (
    <div>
      <div className="flex justify-between p-8">
        <div>
          <Link to="/" className="font-bold text-2xl">
            {" "}
            THE STARTUPS
          </Link>
        </div>

        <div className="flex gap-8 text-xl">
          <Link to="/">Startups</Link>
          <Link to="/investors">Investors</Link>
          <Link to="/partners">Partners</Link>
          <Link to="/exhibitors">Exhibitors</Link>
          <Link to="profile">Manage Profile</Link>
        </div>
      </div>
      <hr className="border-t border-gray-100 w-full" />
      
    </div>
  );
}
