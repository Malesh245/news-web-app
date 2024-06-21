import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = ({ setCategory, setSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full h-24 bg-slate-900 flex items-center justify-between text-white text-xl md:text-2xl top-0 sticky">
      <Link to={"/"}>
        <div className="ml-8 font-semibold hover:text-blue-600">Home</div>
      </Link>
      <div className="hidden md:flex justify-center items-center gap-6">
        <div
          className="font-semibold hover:text-blue-600 cursor-pointer"
          onClick={() => setCategory("general")}
        >
          General
        </div>
        <div
          className="font-semibold hover:text-blue-600 cursor-pointer"
          onClick={() => setCategory("business")}
        >
          Business
        </div>
        <div
          className="font-semibold hover:text-blue-600 cursor-pointer"
          onClick={() => setCategory("technology")}
        >
          Technology
        </div>
        <div
          className="font-semibold hover:text-blue-600 cursor-pointer"
          onClick={() => setCategory("sports")}
        >
          Sports
        </div>
        <div
          className="font-semibold hover:text-blue-600 cursor-pointer"
          onClick={() => setCategory("entertainment")}
        >
          Entertainment
        </div>
        <div
          className="font-semibold hover:text-blue-600 cursor-pointer"
          onClick={() => setCategory("health")}
        >
          Health
        </div>
        <div
          className="font-semibold hover:text-blue-600 cursor-pointer"
          onClick={() => setCategory("science")}
        >
          Science
        </div>
        <Link to={"/favorites"}>
          <div className="font-semibold hover:text-blue-600">Favorite</div>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="w-64 mr-8 border rounded-md bg-transparent flex hover:border-blue-600">
          <CiSearch
            size={40}
            style={{
              margin: "10px",
            }}
          />
          <input
            type="text"
            placeholder="Search News"
            className="w-full bg-transparent outline-none text-white"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="md:hidden mr-8">
          <button onClick={handleMenuToggle}>
            {menuOpen ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-24 left-0 w-full bg-slate-900 text-white flex flex-col items-center py-4 md:hidden">
          <div
            className="font-semibold hover:text-blue-600 cursor-pointer py-2"
            onClick={() => setCategory("general")}
          >
            General
          </div>
          <div
            className="font-semibold hover:text-blue-600 cursor-pointer py-2"
            onClick={() => setCategory("business")}
          >
            Business
          </div>
          <div
            className="font-semibold hover:text-blue-600 cursor-pointer py-2"
            onClick={() => setCategory("technology")}
          >
            Technology
          </div>
          <div
            className="font-semibold hover:text-blue-600 cursor-pointer py-2"
            onClick={() => setCategory("sports")}
          >
            Sports
          </div>
          <div
            className="font-semibold hover:text-blue-600 cursor-pointer py-2"
            onClick={() => setCategory("entertainment")}
          >
            Entertainment
          </div>
          <div
            className="font-semibold hover:text-blue-600 cursor-pointer py-2"
            onClick={() => setCategory("health")}
          >
            Health
          </div>
          <div
            className="font-semibold hover:text-blue-600 cursor-pointer py-2"
            onClick={() => setCategory("science")}
          >
            Science
          </div>
          <Link to={"/favorites"}>
            <div className="font-semibold hover:text-blue-600 py-2">
              Favorites
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
