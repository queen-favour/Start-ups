import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Search from "../../components/Search";
import Filters from "../../components/Filters";

import Card from "../../components/Card";
import CardsTable from "../../components/CardsTable";

export default function Startups() {
  //CODE BLOCK FOR SEARCH IMPLEMENTATION
  // const [searchQuery, setSearchQuery] = useState('');
  // const dispatch = useDispatch();

  // const handleSearchChange =(query) ={

  // }

  //CODE BLOCK FOR TABLE IMPLEMENTATION
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/companies") // Replace with your API endpoint
      .then((response) => setCardsData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="flex justify-between p-8">
        <div className="py-8">
          <Search />
        </div>
        <div className="py-8 flex gap-2">
          <span className="text-xl pt-2">Filter by</span>
          <Filters placeholder="Company Sector" />
          <Filters placeholder="Country" />
          <Filters placeholder="Customer Focus" />
          <Filters placeholder="Stage of Growth" />
        </div>
      </div>

      <div>
        <CardsTable />
      </div>
    </div>
  );
}
