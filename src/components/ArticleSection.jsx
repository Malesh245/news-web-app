import React, { useEffect, useState, useCallback } from "react";
import image from "../assets/img.jpg";
import { Link } from "react-router-dom";

const ArticleSection = ({ category, search }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    const pageSize = 100;
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setArticles((prevArticles) => [...prevArticles, ...data.articles]);
      setHasMore(data.articles.length === pageSize);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  }, [category, page]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  useEffect(() => {
    setPage(1);
    setArticles([]);
    setHasMore(true);
  }, [category]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  const filteredArticles = articles.filter((article) =>
    search ? article.title.toLowerCase().includes(search.toLowerCase()) : true
  );

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {filteredArticles.map((news, index) => (
        <div
          key={index}
          className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300"
        >
          <Link to={`/articles/details`} state={{ news: news }}>
            <img
              className="w-full h-48 object-cover object-center"
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
        </div>
      ))}
      {loading && (
        <p className="col-span-full text-center">Loading more articles...</p>
      )}
      {!hasMore && (
        <p className="col-span-full text-center">No more articles available.</p>
      )}
    </div>
  );
};

export default ArticleSection;
