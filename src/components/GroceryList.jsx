import { useState } from "react";
import Item from "./Item"; // Importing the Item component to render each grocery item

export default function GroceryList({ items, onDeleteItem, onToggleItem, onClearItems }) {
  // State to manage sorting criteria
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  // Sorting items based on the selected criteria
  switch (sortBy) {
    case "name":
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name)); // Sort by item name alphabetically
      break;
    case "checked":
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked); // Sort by checked status
      break;
    default:
      sortedItems = items; // Keep the original order
      break;
  }

  return (
    <>
      {/* Render the list of grocery items */}
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
          ))}
        </ul>
      </div>
      {/* Render sorting options and clear button */}
      <div className="actions">
        {/* Dropdown to select sorting criteria */}
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option> {/* Sort by input order */}
          <option value="name">Sort by item name</option> {/* Sort by item name */}
          <option value="checked">Sort by checked status</option> {/* Sort by checked status */}
        </select>
        <button onClick={onClearItems}>Clear the list</button> {/* Button to clear the list */}
      </div>
    </>
  );
}
