import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Category",
    items: [
      "General",
      "Business",
      "Technology",
      "Sports",
      " Entertainment",
      " Health",
      "Science",
    ],
  },
  {
    title: "Support",
    items: ["Pricing", "Documentation", "Guides", "API Status"],
  },
  {
    title: "Company",
    items: ["Home", "About", "Favorites"],
  },
  {
    title: "Legal",
    items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
  },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
  { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const Footer = ({ setCategory }) => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-10 px-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-20">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase mb-4">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="py-1 text-gray-500 hover:text-white cursor-pointer"
                  onClick={() =>
                    section.title === "Category" && setCategory(item)
                  }
                >
                  {item === "Home" ? (
                    <Link to="/">Home</Link>
                  ) : item === "Favorites" ? (
                    <Link to="/favorites">Favorites</Link>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8">
        <p className="text-gray-500 text-center md:text-left py-4">
          &copy; 2024 News App, LLC. All rights reserved.
        </p>
        <div className="flex justify-center md:justify-end space-x-6 py-4">
          {items.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <item.icon className="text-gray-500 hover:text-white transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
