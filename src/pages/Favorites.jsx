import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image from "../assets/img.jpg"; // Import the image if not already imported

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mt-5">Favorite Articles</h1>
        {favorites.length === 0 ? (
          <p className="mt-5">You have no favorite articles.</p>
        ) : (
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((news, index) => (
              <li
                key={index}
                className="mb-6 w-full rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300"
              >
                <Link to={`/articles/details`} state={{ news: news }}>
                  <img
                    className="w-full object-cover object-center"
                    src={news.urlToImage || image}
                    alt={news.title}
                  />
                  <div className="px-4 py-3">
                    <h2 className="text-lg font-semibold mb-2">{news.title}</h2>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {news.description}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
        <Link to="/" className="block text-blue-500 mt-8 hover:underline">
          Back to Home
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Favorites;
