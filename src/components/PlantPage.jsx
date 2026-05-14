import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main>
      <NewPlantForm plant={plants} setPlant={setPlants} />
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
