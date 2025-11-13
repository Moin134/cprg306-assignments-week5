"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-4 border rounded-lg bg-gray-50 w-full">
      <h2 className="text-xl font-semibold mb-2">
        Meal Ideas for: {ingredient || "—"}
      </h2>
      {!ingredient && <p>Select an item to see meal ideas.</p>}
      {ingredient && meals.length === 0 && <p>No meal ideas found.</p>}
      <ul className="space-y-2">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="flex items-center gap-2">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-12 h-12 rounded"
            />
            <span>{meal.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
