"use client";
import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <nav className="bg-gray-900 px-5 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-white">
          {siteConfig.name}
        </Link>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-1 text-sm rounded bg-white text-gray-800 border border-gray-300 focus:outline-none"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded">
            Buscar
          </button>
        </div>
      </div>
    </nav>
  );
}