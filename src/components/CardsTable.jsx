import React, { useState } from "react";
import img from "../assets/images/sampleImg.jpg";
import Card from "../components/Card";

export default function CardsTable() {
  //   const [cardsData, setCardsData] = useState([]);

  //TO FETCH DATA FROM API
  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const response = await fetch("API_URL_HERE");
  //         const data = await response.json();
  //         setCardsData(data);
  //       } catch (error) {
  //         console.error("Error fetching card data:", error);
  //       }
  //     }
  //     fetchData();
  //   }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4">
      {/* {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          companyName={card.companyName}
          sector={card.sector}
          country={card.country}
          customerFocus={card.customerFocus}
          stageOfGrowth={card.stageOfGrowth}
        />
      ))} */}
      <Card
        image={img}
        companyName="Boston Consulting Group"
        sector="Fintech (Financial Technology)"
        country="Nigeria"
        customerFocus="B2B"
        stageOfGrowth="Expansion Stage"
      />

      <Card
        image={img}
        companyName="favour"
        sector="fav"
        country="nig"
        customerFocus="somew"
        stageOfGrowth="best"
      />
      <Card
        image={img}
        companyName="favour"
        sector="fav"
        country="nig"
        customerFocus="somew"
        stageOfGrowth="best"
      />
      <Card
        image={img}
        companyName="favour"
        sector="fav"
        country="nig"
        customerFocus="somew"
        stageOfGrowth="best"
      />
      <Card
        image={img}
        companyName="favour"
        sector="fav"
        country="nig"
        customerFocus="somew"
        stageOfGrowth="best"
      />
    </div>
  );
}
