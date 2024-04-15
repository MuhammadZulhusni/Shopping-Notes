export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li key={item.id}>
      {/* Checkbox to toggle the checked status of the item */}
      <input type="checkbox" checked={item.checked} onChange={() => onToggleItem(item.id)} />
      {/* Display item quantity and name, with line-through style if checked */}
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name}
      </span>
      {/* Button to delete the item */}
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
}
