
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full overflow-hidden">
      
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto overflow-hidden rounded-full">
        
        {/* Top Navbar */}
        <div className="px-6 py-5 flex items-center justify-between bg-white/10 backdrop-blur-lg">
          
          {/* Logo */}
          <h1 className="text-2xl font-extrabold tracking-wide text-white">
            GOALIX
          </h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
            <a href="/" className="hover:text-green-400 transition">
              Home
            </a>

            <a href="/about" className="hover:text-green-400 transition">
              About
            </a>

            <a href="/waitlist" className="hover:text-green-400 transition">
              Waitlist
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Separator Line */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10" />
        )}

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-6 flex flex-col items-center gap-5 text-white font-medium bg-white/10 backdrop-blur-lg">
            
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-black transition"
            >
              Home
            </a>

            <a
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-black transition"
            >
              About
            </a>

            <a
              href="/waitlist"
              onClick={() => setIsOpen(false)}
              className="hover:text-black transition"
            >
              Waitlist
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}