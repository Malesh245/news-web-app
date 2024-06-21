import React from "react";
import ArticleDetail from "../components/ArticleDetail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ArticleDetailPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <ArticleDetail />
      </div>
      <Footer />
    </div>
  );
};

export default ArticleDetailPage;
