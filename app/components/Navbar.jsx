"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-pink-100 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-xl font-bold text-pink-600">Tales of the Cake</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#products" className="hover:text-pink-600">Products</a>
          <a href="#gallery" className="hover:text-pink-600">Gallery</a>
          <a href="#story" className="hover:text-pink-600">Our Story</a>
          <a href="#contact" className="hover:text-pink-600">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-pink-50 px-4 pb-4 space-y-2">
          <a href="#products" className="block hover:text-pink-600">Products</a>
          <a href="#gallery" className="block hover:text-pink-600">Gallery</a>
          <a href="#story" className="block hover:text-pink-600">Our Story</a>
          <a href="#contact" className="block hover:text-pink-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
