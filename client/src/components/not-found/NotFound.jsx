import { Link } from "react-router";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Page Not Found
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
                Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>

            <Link
                to="/"
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 
                   text-white font-semibold rounded-lg shadow-lg 
                hover:from-indigo-600 hover:to-purple-700 
                   transition-all duration-300"
            >
                Go Back Home
            </Link>
        </div>
    );
}
