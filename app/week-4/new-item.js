"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md w-fit">
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className="px-3 py-1 bg-red-500 text-white rounded disabled:bg-gray-400"
      >
        -
      </button>

      <span className="text-xl font-bold text-black">{quantity}</span>

      <button
        onClick={increment}
        disabled={quantity === 20}
        className="px-3 py-1 bg-green-500 text-white rounded disabled:bg-gray-400"
      >
        +
      </button>
    </div>
  );
}
