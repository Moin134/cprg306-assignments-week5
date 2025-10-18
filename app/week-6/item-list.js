"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") {
      if (a.category === b.category) return a.name.localeCompare(b.name);
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = sortedItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="space-y-4">
      <div className="space-x-2">
        <button
          onClick={() => setSortBy("name")}
          className={sortBy === "name" ? "bg-blue-500 text-white px-4 py-2 rounded" : "bg-gray-200 px-4 py-2 rounded"}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={sortBy === "category" ? "bg-blue-500 text-white px-4 py-2 rounded" : "bg-gray-200 px-4 py-2 rounded"}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className={sortBy === "group" ? "bg-blue-500 text-white px-4 py-2 rounded" : "bg-gray-200 px-4 py-2 rounded"}
        >
          Group by Category
        </button>
      </div>

      {sortBy === "group" ? (
        Object.keys(groupedItems)
          .sort()
          .map(category => (
            <div key={category}>
              <h2 className="font-bold capitalize">{category}</h2>
              <ul className="ml-4 space-y-2">
                {groupedItems[category]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map(item => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                  ))}
              </ul>
            </div>
          ))
      ) : (
        <ul className="space-y-3 mt-4">
          {sortedItems.map(item => (
            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
          ))}
        </ul>
      )}
    </div>
  );
}
