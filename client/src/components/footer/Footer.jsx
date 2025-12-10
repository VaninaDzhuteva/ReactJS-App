import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 ">

        {/* Brand */}
        <div>
          <Link to={'/'} className="flex justify-center">
            <img
              alt="Yumjam"
              src="/images/white-logo.png"
              className="logo"
            />
          </Link>
          <h2 className="text-2xl font-bold text-white">Yumjam</h2>
          <p className="mt-3 text-sm text-gray-400">
            Discover, create, and share delicious recipes every day.
          </p>
        </div>

        {/* Navigation */}
        {/* <div>
          <h3 className="text-lg font-semibold text-white mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/recipes" className="hover:text-white">Recipes</a></li>
          </ul>
        </div> */}

        {/* Account */}
        {/* <div>
          <h3 className="text-lg font-semibold text-white mb-3">Account</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/login" className="hover:text-white">Login</a></li>
            <li><a href="/register" className="hover:text-white">Register</a></li>
            <li><a href="/profile" className="hover:text-white">My Profile</a></li>
            <li><a href="/add-recipe" className="hover:text-white">Add Recipe</a></li>
          </ul>
        </div> */}

      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Yumjam. All rights reserved.
      </div>
    </footer>
  );
}
