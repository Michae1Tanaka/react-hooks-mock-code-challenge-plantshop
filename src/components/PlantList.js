import React from "react";
import PlantCard from "./PlantCard";
import { v4 as uuid } from "uuid";

function PlantList({ displayPlants }) {
  const plantsMap = displayPlants.map((plant) => {
    return <PlantCard key={uuid()} plant={plant} />;
  });

  return <ul className="cards">{plantsMap}</ul>;
}

export default PlantList;
