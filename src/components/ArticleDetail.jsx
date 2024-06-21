import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const NewsDetail = () => {
  const location = useLocation();
  const { news } = location.state;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const favorite = favorites.find((item) => item.url === news.url);
    setIsFavorite(!!favorite); // Set isFavorite to true if article is in favorites
  }, [news.url]);

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (item) => item.url !== news.url
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(news);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  const fullContent = news.content
    ? news.content.split("[+")[0]
    : news.description;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 md:px-0">
      <Link to="/" className="text-blue-500 hover:underline">
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mt-5">{news.title}</h1>
      <p className="text-gray-500 mt-2">
        By {news.author ? news.author : "Unknown Author"} |{" "}
        {new Date(news.publishedAt).toLocaleDateString()}
      </p>
      <div className="mt-5 text-lg leading-relaxed">{fullContent}</div>
      {news.urlToImage && (
        <img className="w-full mt-5" src={news.urlToImage} alt={news.title} />
      )}
      {news.content && news.content.includes("[+") && (
        <div className="mt-5">
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Read the full article
          </a>
        </div>
      )}
      <button
        onClick={handleFavoriteClick}
        className={`mt-5 ${
          isFavorite ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"
        } px-4 py-2 rounded-md shadow-md hover:bg-opacity-75 focus:outline-none`}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default NewsDetail;
