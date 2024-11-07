import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Search from "../../components/Search";
import Filters from "../../components/Filters";

export default function Startups() {
  // const [searchQuery, setSearchQuery] = useState('');
  // const dispatch = useDispatch();

  // const handleSearchChange =(query) ={

  // }

  return (
    <div>
      <div className="flex justify-between p-8">
        <div className="py-8">
          <Search />
        </div>
        <div className="py-8 flex gap-2">
          <Filters placeholder="Company Sector" />
          <Filters placeholder="Company Sector" />
          <Filters placeholder="Company Sector" />
          <Filters placeholder="Company Sector" />
        </div>
      </div>
    </div>
  );
}
