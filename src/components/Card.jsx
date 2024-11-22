import React from 'react';

export default function Card({ image, companyName="", sector="", country="", customerFocus="", stageOfGrowth="" }) {
  return (
    <div className="h-fit  shadow-md p-4 ">
      <img src={image} alt={`${companyName} logo`} className="w-full bg-gray-500 h-1/2 object-contain rounded-2xl" />
      <p className="text-xl py-3">{companyName}</p>
      <p className="font-normal text-lg ">{sector}</p>
      <p className="font-normal text-lg  ">{country}</p>
      <p className="font-normal text-lg ">{customerFocus}</p>
      <p className="font-normal text-lg  ">{stageOfGrowth}</p>
    </div>
  );
}
