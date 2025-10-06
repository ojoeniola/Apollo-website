"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#e5e7eb] z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-12">
          <div className="text-2xl font-bold text-gray-600">Apollo</div>
          <nav>
            <ul className="flex gap-6 text-gray-700 font-medium text-sm">
              <li className="cursor-pointer">Platform</li>
              <li className="cursor-pointer">Roles</li>
              <li className="cursor-pointer">Resources</li>
              <li className="cursor-pointer">Pricing</li>
            </ul>
          </nav>
        </div>

        {/* Right: Buttons */}
        <div className="flex gap-3 items-center">
          <Link href="/login" className="px-4 py-2 text-sm">
            Log in
          </Link>
          <Link href="/demo">
            <button className="px-4 py-2 border border-black rounded-lg text-sm hover:bg-gray-100 transition">
              Get a demo
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 text-sm text-black rounded-lg bg-[rgb(235,242,18)] hover:bg-yellow-100 transition">
              Sign up for free
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
