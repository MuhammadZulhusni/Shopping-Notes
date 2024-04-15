// Importing useState hook from React
import { useState } from "react";
// Importing components from local files
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

// Initial list of grocery items
const groceryItems = [
  {
    id: 1,
    name: "Coffee",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: "Sugar",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: "Mineral Water",
    quantity: 3,
    checked: true,
  },
];

// Main App component
export default function App() {
  // State to hold the list of grocery items
  const [items, setItems] = useState(groceryItems);

  // Function to add a new item to the list
  function handleAddItem(item) {
    setItems([...items, item]);
  }

  // Function to delete an item from the list
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // Function to toggle the checked state of an item
  function handleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  }

  // Function to clear all items from the list
  function handleClearItems() {
    setItems([]);
  }

  // Render the main application
  return (
    <div className="app">
      {/* Header component */}
      <Header />
      {/* Form component for adding new items */}
      <Form onAddItem={handleAddItem} />
      {/* GroceryList component to display the list of items */}
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
      {/* Footer component */}
      <Footer items={items} />
    </div>
  );
}
