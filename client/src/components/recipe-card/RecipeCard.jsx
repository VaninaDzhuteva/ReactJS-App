import { Link } from "react-router";

export default function RecipeCard({
  id,
  title,
  image,
  category,
  description,
  canEdit = false,
  onDelete,
}) {
  // Category → icon
  const categoryIcons = {
    Dessert: "🍰",
    "Main Meal": "🍽️",
    Salad: "🥗",
    Soup: "🍲",
    Breakfast: "🥞",
    Drink: "🍹",
  };

  // Category → gradient badge
  const categoryGradients = {
    Dessert: "bg-gradient-to-r from-pink-400 to-pink-600 text-white",
    "Main Meal": "bg-gradient-to-r from-orange-400 to-orange-600 text-white",
    Salad: "bg-gradient-to-r from-green-400 to-green-600 text-white",
    Soup: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-800",
    Breakfast: "bg-gradient-to-r from-blue-400 to-blue-600 text-white",
    Drink: "bg-gradient-to-r from-purple-400 to-purple-600 text-white",
  };

  const icon = categoryIcons[category] || "🍴";
  const badgeStyle =
    categoryGradients[category] ||
    "bg-gradient-to-r from-gray-300 to-gray-500 text-gray-800";

  return (
    <div className="card bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category Badge */}
        <span
          className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full ${badgeStyle}`}
        >
          <span>{icon}</span>
          {category}
        </span>

        <h3 className="text-lg font-semibold mt-2">{title}</h3>

        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {description}
        </p>

        {/* Buttons */}
        <div className="mt-4 flex items-center justify-between">
          {/* View Recipe */}
          <Link
            to={`/recipes/${id}`}
            className="text-sm font-medium text-orange-600 hover:text-orange-700"
          >
            View Recipe →
          </Link>

          {/* Edit/Delete only if allowed */}
          {canEdit && (
            <div className="flex gap-3">
              <Link
                to={`/recipes/${id}/edit`}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Edit
              </Link>
              <button
                onClick={() => onDelete(id)}
                className="text-sm text-red-600 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
