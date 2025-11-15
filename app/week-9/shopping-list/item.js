export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="flex justify-between items-center p-2 border rounded cursor-pointer hover:bg-gray-100"
    >
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">
          {quantity} × {category}
        </p>
      </div>
    </li>
  );
}
