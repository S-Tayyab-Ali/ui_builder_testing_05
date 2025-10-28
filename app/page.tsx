"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Recipe {
  id: number;
  name: string;
  description: string;
  spiceLevel: "Mild" | "Medium" | "Hot";
  prepTime: string;
  ingredients: string[];
  instructions: string[];
  imageColor: string;
}

const recipes: Recipe[] = [
  {
    id: 1,
    name: "Classic Salsa Roja",
    description: "A vibrant red salsa made with tomatoes, cilantro, and lime",
    spiceLevel: "Medium",
    prepTime: "15 mins",
    imageColor: "bg-red-500",
    ingredients: [
      "4 medium tomatoes",
      "1 onion",
      "2 jalapeños",
      "1 bunch cilantro",
      "2 limes",
      "Salt to taste",
    ],
    instructions: [
      "Dice tomatoes, onion, and jalapeños",
      "Add cilantro and mix",
      "Squeeze lime juice over mixture",
      "Season with salt and let sit for 10 minutes",
      "Serve with tortilla chips",
    ],
  },
  {
    id: 2,
    name: "Salsa Verde",
    description: "A tangy green salsa featuring tomatillos and peppers",
    spiceLevel: "Medium",
    prepTime: "20 mins",
    imageColor: "bg-green-500",
    ingredients: [
      "6 tomatillos",
      "2 serrano peppers",
      "1/2 onion",
      "1 bunch cilantro",
      "1 lime",
      "Salt to taste",
    ],
    instructions: [
      "Boil tomatillos until soft",
      "Blend with serrano peppers and onion",
      "Add fresh cilantro",
      "Season with lime juice and salt",
      "Serve warm or cold",
    ],
  },
  {
    id: 3,
    name: "Mango Salsa",
    description: "A tropical twist with sweet mango and spicy peppers",
    spiceLevel: "Mild",
    prepTime: "10 mins",
    imageColor: "bg-yellow-400",
    ingredients: [
      "2 ripe mangoes",
      "1 red bell pepper",
      "1 jalapeño",
      "1/4 red onion",
      "1 lime",
      "Fresh mint",
    ],
    instructions: [
      "Dice mango and bell pepper",
      "Finely chop jalapeño and red onion",
      "Combine all ingredients",
      "Add lime juice",
      "Top with fresh mint and serve",
    ],
  },
  {
    id: 4,
    name: "Corn & Black Bean Salsa",
    description: "A hearty, nutritious salsa packed with fresh vegetables",
    spiceLevel: "Mild",
    prepTime: "15 mins",
    imageColor: "bg-amber-600",
    ingredients: [
      "2 cups corn",
      "1 can black beans",
      "1 red bell pepper",
      "1/2 red onion",
      "2 limes",
      "Cilantro",
    ],
    instructions: [
      "Mix corn and drained black beans",
      "Add diced bell pepper and onion",
      "Squeeze lime juice",
      "Add fresh cilantro",
      "Season to taste and chill",
    ],
  },
];

export default function Home() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-red-600">🌶️ Salsa Hub</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#recipes" className="text-gray-700 hover:text-red-600">
              Recipes
            </a>
            <a href="#about" className="text-gray-700 hover:text-red-600">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to Salsa Hub
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Discover amazing salsa recipes from around the world
        </p>
        <Button
          size="lg"
          onClick={() => {
            const element = document.getElementById("recipes");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore Recipes
        </Button>
      </section>

      {/* Recipes Section */}
      <section id="recipes" className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Featured Recipes
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedRecipe(recipe)}
            >
              <div className={`${recipe.imageColor} h-48 flex items-center justify-center`}>
                <span className="text-6xl">🌶️</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-gray-900">
                    {recipe.name}
                  </h4>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(recipe.id);
                    }}
                    className="text-2xl hover:scale-110 transition-transform"
                  >
                    {favorites.includes(recipe.id) ? "❤️" : "🤍"}
                  </button>
                </div>
                <p className="text-gray-600 mb-4">{recipe.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>⏱️ {recipe.prepTime}</span>
                  <span>🔥 {recipe.spiceLevel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold">{selectedRecipe.name}</h2>
              <button
                onClick={() => setSelectedRecipe(null)}
                className="text-2xl text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <div className={`${selectedRecipe.imageColor} h-48 rounded-lg flex items-center justify-center mb-6`}>
                <span className="text-8xl">🌶️</span>
              </div>

              <p className="text-gray-600 mb-6">{selectedRecipe.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 p-4 rounded">
                  <p className="text-sm text-gray-600">Prep Time</p>
                  <p className="text-lg font-semibold">{selectedRecipe.prepTime}</p>
                </div>
                <div className="bg-red-50 p-4 rounded">
                  <p className="text-sm text-gray-600">Spice Level</p>
                  <p className="text-lg font-semibold">{selectedRecipe.spiceLevel}</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
              <ul className="list-disc list-inside mb-6 text-gray-700">
                {selectedRecipe.ingredients.map((ingredient, idx) => (
                  <li key={idx}>{ingredient}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-4">Instructions</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                {selectedRecipe.instructions.map((instruction, idx) => (
                  <li key={idx}>{instruction}</li>
                ))}
              </ol>

              <Button
                onClick={() =>
                  toggleFavorite(selectedRecipe.id)
                }
                variant="outline"
                className="w-full"
              >
                {favorites.includes(selectedRecipe.id) ? "❤️" : "🤍"} Add to
                Favorites
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="bg-red-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            About Salsa
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-3">History</h4>
              <p className="text-gray-600">
                Salsa has roots in Spanish and African cuisine, evolving in the
                Caribbean, particularly in Cuba and Puerto Rico, before
                spreading throughout Latin America.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-3">Varieties</h4>
              <p className="text-gray-600">
                From traditional Salsa Roja to modern fusion flavors, salsa
                comes in many varieties including Salsa Verde, Corn Salsa, and
                Fruit-based options.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-3">Serving</h4>
              <p className="text-gray-600">
                Best enjoyed fresh with tortilla chips, tacos, or as a topping
                for grilled meats and fish. Perfect for gatherings and meals!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Get in Touch
        </h3>
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg p-8 text-center">
          <p className="mb-6 text-lg">
            Have a favorite salsa recipe? We&apos;d love to hear from you!
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() =>
              (window.location.href = "mailto:hello@salsahub.com")
            }
          >
            Send us an Email
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2024 Salsa Hub. All rights reserved. 🌶️</p>
      </footer>
    </div>
  );
}

