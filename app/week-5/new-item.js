"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = { name, quantity, category };
    console.log(item);

    alert("Name: " + name + "\nQuantity: " + quantity + "\nCategory: " + category);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md space-y-4 w-full max-w-sm"
    >

      {/* Name Field */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Item Name"
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
      />

      {/* Quantity Field with +/- buttons */}
      <div>
        <label className="block text-sm font-medium text-black">Quantity:</label>
        <div className="flex items-center space-x-2 mt-1">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="px-3 py-1 bg-red-500 text-white rounded disabled:bg-gray-400"
          >
            -
          </button>

          <span className="text-xl font-bold text-black">{quantity}</span>

          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="px-3 py-1 bg-green-500 text-white rounded disabled:bg-gray-400"
          >
            +
          </button>
        </div>
      </div>

      {/* Category Field */}
      <div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black bg-white"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen-foods">Frozen Foods</option>
          <option value="canned-goods">Canned Goods</option>
          <option value="dry-goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Add Item
        </button>
      </div>

    </form>
  );
}
