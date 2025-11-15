"use client";

import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const { user } = useUserAuth();

  // PROTECT THE PAGE
  if (!user) {
    return (
      <main className="p-4">
        <p>You must be logged in to view the shopping list.</p>
      </main>
    );
  }

  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} onItemSelect={() => {}} />
    </main>
  );
}
