import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Search from "../../components/Search";
import Filters from "../../components/Filters";
import CardsTable from "../../components/CardsTable";

export default function Exhibitors() {
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
      <span className="hidden text-xl lg:block">Filter by</span>
      <Filters placeholder="Company Sector" />
        <Filters placeholder="Country" />
      </div>
    </div>

    <div>
      <CardsTable />
    </div>
  </div>
  )
}
