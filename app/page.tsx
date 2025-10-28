"use client";

import { useState } from "react";

interface Recipe {
  id: number;
  name: string;
  description: string;
  spiceLevel: "Mild" | "Medium" | "Hot";
  prepTime: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

const recipes: Recipe[] = [
  {
    id: 1,
    name: "Classic Salsa Roja",
    description: "Traditional red salsa with tomatoes, cilantro, and lime",
    spiceLevel: "Medium",
    prepTime: "15 mins",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center",
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
    description: "Tangy green salsa featuring tomatillos and serrano peppers",
    spiceLevel: "Medium",
    prepTime: "20 mins",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop&crop=center",
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
    description: "Tropical twist with sweet mango and spicy peppers",
    spiceLevel: "Mild",
    prepTime: "10 mins",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&crop=center",
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
    description: "Hearty, nutritious salsa packed with fresh vegetables",
    spiceLevel: "Mild",
    prepTime: "15 mins",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center",
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-base font-semibold text-gray-900 tracking-tight">
            Salsa
          </div>
          <div className="flex gap-8 text-sm">
            <a
              href="#recipes"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Recipes
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-6 tracking-tight">
            Salsa
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Discover fresh, vibrant salsa recipes that bring authentic flavors
            to your kitchen
          </p>
          <a
            href="#recipes"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition"
          >
            Explore Recipes
          </a>
        </div>
      </section>

      {/* Recipes Section */}
      <section id="recipes" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold text-gray-900 mb-16 tracking-tight">
          Featured Recipes
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {recipes.map((recipe) => (
            <button
              key={recipe.id}
              onClick={() => setSelectedRecipe(recipe)}
              className="text-left group"
            >
              <div className="relative mb-4 h-48 bg-gray-100 rounded-2xl overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {recipe.name}
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed line-clamp-2">
                  {recipe.description}
                </p>
                <div className="flex gap-4 text-xs text-gray-500 pt-2">
                  <span>⏱ {recipe.prepTime}</span>
                  <span>🔥 {recipe.spiceLevel}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-end z-50"
          onClick={() => setSelectedRecipe(null)}
        >
          <div
            className="bg-white w-full max-h-[90vh] overflow-y-auto rounded-t-3xl animate-in slide-in-from-bottom-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-2xl mx-auto">
              {/* Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 py-6 flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {selectedRecipe.name}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="text-gray-500 hover:text-gray-900 transition text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className="px-6 py-8 space-y-8">
                {/* Image */}
                <div className="h-48 bg-gray-100 rounded-2xl overflow-hidden">
                  <img
                    src={selectedRecipe.image}
                    alt={selectedRecipe.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <p className="text-gray-600 font-light leading-relaxed text-base">
                  {selectedRecipe.description}
                </p>

                {/* Meta Info */}
                <div className="grid grid-cols-2 gap-6 py-6 border-y border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Prep Time</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {selectedRecipe.prepTime}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Spice Level</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {selectedRecipe.spiceLevel}
                    </p>
                  </div>
                </div>

                {/* Ingredients */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                    Ingredients
                  </h3>
                  <ul className="space-y-3">
                    {selectedRecipe.ingredients.map((ingredient, idx) => (
                      <li key={idx} className="text-gray-700 text-sm font-light flex items-start">
                        <span className="text-gray-400 mr-3">•</span>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instructions */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                    Instructions
                  </h3>
                  <ol className="space-y-3">
                    {selectedRecipe.instructions.map((instruction, idx) => (
                      <li key={idx} className="text-gray-700 text-sm font-light flex items-start">
                        <span className="font-semibold text-gray-400 mr-3 min-w-[20px]">
                          {idx + 1}
                        </span>
                        <span>{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Favorite Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(selectedRecipe.id);
                  }}
                  className="w-full py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition text-sm"
                >
                  {favorites.includes(selectedRecipe.id) ? "❤️" : "🤍"} Add to
                  Favorites
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-900 mb-16 tracking-tight">
            About Salsa
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                Origin
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Salsa has its roots in Spanish and indigenous cuisines, blending
                together to create a flavorful staple in Latin American cooking.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                Varieties
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                From fresh pico de gallo to cooked salsas, there are countless
                regional variations, each with its own unique flavor profile.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                Serving
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Enjoy salsa with tortilla chips, tacos, enchiladas, or as a
                topping for grilled meats and seafood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-gray-900 rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl font-semibold text-white mb-4 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-gray-400 font-light mb-8">
            Have a recipe to share? We&apos;d love to hear from you.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition text-sm">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm font-light">
            &copy; 2024 Salsa. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

