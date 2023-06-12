import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [displayPlants, setDisplayPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plantsData) => {
        setPlants(plantsData);
      });
  }, []);

  useEffect(() => {
    setDisplayPlants(plants);
  }, [plants]);

  return (
    <main>
      <NewPlantForm setPlants={setPlants} plants={plants} />
      <Search setDisplayPlants={setDisplayPlants} plants={plants} />
      <PlantList displayPlants={displayPlants} />
    </main>
  );
}

export default PlantPage;
