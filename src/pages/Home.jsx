import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleSection from "../components/ArticleSection";

const Home = () => {
  const [category, setCategory] = useState("general");
  const [search, setSearch] = useState("");

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Navbar setCategory={setCategory} setSearch={setSearch} />
      <div className="flex-1 flex w-full max-w-full px-4 py-8">
        <ArticleSection category={category} search={search} />
      </div>
      <Footer setCategory={setCategory} />
    </div>
  );
};

export default Home;
