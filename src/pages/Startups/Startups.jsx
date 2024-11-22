import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../../components/Search";
import Filters from "../../components/Filters";
import CardsTable from "../../components/CardsTable";

export default function Startups() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/companies");
      setCardsData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between p-8">
        <div className="py-8">
          <Search />
        </div>
        <div className="py-8 flex gap-2 items-center flex-wrap justify-end">
          <span className="text-xl">Filter by</span>
          <div className="flex gap-2 flex-wrap">
            <Filters placeholder="Company Sector" />
            <Filters placeholder="Country" />
            <Filters placeholder="Customer Focus" />
            <Filters placeholder="Stage of Growth" />
          </div>
        </div>
      </div>

      <div>
        {isLoading ? (
          <div className="flex justify-center items-center p-8">
            <div className="animate-spin h-8 w-8 border-b-2 border-gray-800"></div>
          </div>
        ) : error ? (
          <div className="text-center p-8">
            <div className="text-red-600 mb-2">{error}</div>
            <button
              onClick={fetchData}
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Try again
            </button>
          </div>
        ) : (
          <CardsTable data={cardsData} />
        )}
      </div>
    </div>
  );
}