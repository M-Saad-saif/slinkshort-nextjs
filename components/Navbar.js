"use client";
import { useState } from "react";
import Link from "next/link";
// import './style.css'

const Navbar = () => {

  return (
    <nav className="sticky top-0 z-50 transition-all duration-300 bg-linear-to-r from-emerald-50 to-teal-50 shadow-lg py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-1 bg-linear-to-r from-emerald-500 to-teal-500 rounded-lg group-hover:scale-110 transition-transform">
              <i className="ri-links-line"></i>
            </div>
            <span className="text-2xl font-bold bg-linear-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
              S.LinkShortener
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 rounded-full text-emerald-800 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 rounded-full text-emerald-800 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200 font-medium"
            >
              About
            </Link>
          </div>

          {/* Right Side button */}
          <div className="nav-right-button hidden md:flex items-center space-x-4">
            <button className="">button</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
