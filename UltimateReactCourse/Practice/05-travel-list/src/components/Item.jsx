export default function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        // checked={item.packed}
        onChange={() => {
          onToggleItems(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button style={{ color: "red" }} onClick={() => onDeleteItem(item.id)}>
        X
      </button>
    </li>
  );
}
