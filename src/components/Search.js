import React, { useState } from "react";

function Search({ setDisplayPlants, plants }) {
  const [inputValue, setInputValue] = useState("");

  function handleOnChange(e) {
    const value = e.target.value;
    setInputValue(value);
    const targetedPlant = plants.filter((plant) => {
      return plant.name.toLowerCase().includes(value.toLowerCase());
    });
    setDisplayPlants(targetedPlant);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={inputValue}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default Search;
