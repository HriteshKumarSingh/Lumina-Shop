import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-300 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-gray-800 text-2xl font-bold">LuminaShop</Link>
      </div>
    </footer>
  );
}

export default Footer;