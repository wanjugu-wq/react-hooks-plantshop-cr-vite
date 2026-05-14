import React, { useState,useEffect } from "react";

function NewPlantForm({ plant, setPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    const newPlant = {
      name: name,
      image: image,
      price: price,
    };
    setName("");
    setImage("");
    setPrice("");

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((data) => setPlant([...plant, data]));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Plant name"
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">
          Add Plant
        </button>
      </form>
    </div>
  );
}

export default NewPlantForm;
