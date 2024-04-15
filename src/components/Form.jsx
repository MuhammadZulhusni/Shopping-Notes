import { useState } from "react";

// Form component
export default function Form({ onAddItem }) {
  // Define state variables for item name and quantity using useState hook
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // If the name input is empty, return and do nothing
    if (!name) return;

    // Create a new item object with the entered name, quantity, and default checked status, along with a unique id
    const newItem = { name, quantity, checked: false, id: Date.now() };

    // Call the onAddItem function passed from the parent component, passing the new item object
    onAddItem(newItem);

    // Log the new item to the console
    console.log(newItem);

    // Clear the input fields by resetting the state variables
    setName("");
    setQuantity(1);
  }

  // Create an array of options for the quantity select input, ranging from 1 to 20
  const quantityNum = [...Array(20)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  // Render the form with input fields for name and quantity, along with a submit button
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What are you shopping for today?</h3>
      {/* Select input for quantity */}
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {quantityNum}
      </select>
      {/* Text input for item name */}
      <input type="text" placeholder="name of item..." value={name} onChange={(e) => setName(e.target.value)} />
      {/* Submit button */}
      <button>Add</button>
    </form>
  );
}
