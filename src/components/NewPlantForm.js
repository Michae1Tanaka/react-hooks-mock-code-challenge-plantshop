import React, { useState } from "react";

function NewPlantForm({ setPlants, plants }) {
  const [inputValue, setInputValue] = useState({
    name: "",
    image: "",
    price: 0,
  });

  function handleInputChange(e) {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  }
  function handleNewPlantSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValue),
    })
      .then((r) => r.json())
      .then((newPlantData) => {
        setPlants([...plants, newPlantData]);
      });
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleNewPlantSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={inputValue.name} onChange={handleInputChange} />
        <input type="text" name="image" placeholder="Image URL" value={inputValue.image} onChange={handleInputChange} />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={inputValue.price}
          onChange={handleInputChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
