// Footer component
export default function Footer({ items }) {
  // Check if the items array is empty
  if (items.length === 0)
    // If it's empty, display a message indicating that the shopping list is empty
    return <footer className="stats">The shopping list is still empty!</footer>;

  // Calculate the total number of items in the shopping list
  const totalItems = items.length;
  // Calculate the number of checked items by filtering items where checked property is true
  const checkedItems = items.filter((item) => item.checked).length;
  // Calculate the percentage of checked items out of the total items
  const percentage = Math.round((checkedItems / totalItems) * 100);

  // Render the footer with statistics
  return (
    <footer className="stats">
      There is {totalItems} items on the shopping list, {checkedItems} goods have been purchased ({percentage}%)
    </footer>
  );
}
