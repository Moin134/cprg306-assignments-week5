export default function Item({ name, quantity, category, emoji }) {
  return (
    <li className="bg-slate-800 text-white p-4 rounded mb-4 w-80">
      <div className="font-bold">
        {name}, {quantity} {emoji}
      </div>
      <div className="text-sm text-gray-300">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}
