
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      
      <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl overflow-hidden">
        
        {/* Top Navbar */}
        <div className="px-6 py-5 flex items-center justify-between">
          
          {/* Logo */}
          <h1 className="text-2xl font-extrabold tracking-wide text-white">
            GOALIX
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
            
            <a
              href="/"
              className="hover:text-black transition duration-300"
            >
              Home
            </a>

            <a
              href="/about"
              className="hover:text-black transition duration-300"
            >
              About
            </a>

            <a
              href="/waitlist"
              className="hover:text-black transition duration-300"
            >
              Waitlist
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen
              ? "max-h-64 opacity-100 border-t border-white/10"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center py-6 gap-6 text-white font-medium bg-white/5 backdrop-blur-xl">
            
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-black transition duration-300"
            >
              Home
            </a>

            <a
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-black transition duration-300"
            >
              About
            </a>

            <a
              href="/waitlist"
              onClick={() => setIsOpen(false)}
              className="hover:text-black transition duration-300"
            >
              Waitlist
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
