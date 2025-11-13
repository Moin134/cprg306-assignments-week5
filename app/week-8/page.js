"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleItemSelect(item) {
    if (!item.name) return;
    let cleanedName = item.name
      .split(",")[0] // remove quantity
      .replace(/[^\w\s]/gi, "") // remove emojis/symbols
      .trim()
      .toLowerCase();
    setSelectedItemName(cleanedName);
  }

  return (
    <main className="p-4 flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
