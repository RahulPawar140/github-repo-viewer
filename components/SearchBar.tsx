"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }: any) {
    const [query, setQuery] = useState("");
    const [language, setLanguage] = useState("");
    const [sort, setSort] = useState("stars");

    const handleSearch = () => {
        onSearch(query || "stars:>10000", language, sort);
    };

    return (
        <div className="mb-6 w-full">

            <div className="flex flex-col md:flex-row gap-3 w-full">

                {/* 🔍 Search Input (FULL WIDTH) */}
                <input
                    type="text"
                    placeholder="Search repositories..."
                    className="flex-1 p-3 rounded-md bg-[#1e293b] border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                {/* 🌐 Language */}
                <select
                    className="p-3 rounded-md bg-[#1e293b] border border-gray-600 text-white"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="php">PHP</option>
                    <option value="typescript">TypeScript</option>
                </select>

                {/* 📊 Sort */}
                <select
                    className="p-3 rounded-md bg-[#1e293b] border border-gray-600 text-white"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="stars">Stars</option>
                    <option value="forks">Forks</option>
                    <option value="updated">Updated</option>
                </select>

                {/* 🔍 Button */}
                <button
                    onClick={handleSearch}
                    className="px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700 transition"
                >
                    Search
                </button>

            </div>

        </div>
    );
}