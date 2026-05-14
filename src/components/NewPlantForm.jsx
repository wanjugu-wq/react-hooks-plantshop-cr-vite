import React, { useEffect } from "react";

function NewPlantForm({ plant, setPlant }) {
  function handleAdd(e) {
    e.preventDefault();
    const form = e.target;
    const newPlant = {
      id: plant.length + 1,
      name: form.name.value,
      image: form.image.value,
      price: parseFloat(form.price.value),
    };
    form.reset();

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
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
