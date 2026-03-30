"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }: any) {
    const [query, setQuery] = useState("");
    const [language, setLanguage] = useState("");

    return (
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl mb-6 flex flex-col md:flex-row gap-3">

            <input
                type="text"
                placeholder="🔍 Search repositories..."
                className="p-2 rounded-lg text-white w-full"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <select
                className="p-2 rounded-lg text-black"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
            >
                <option value="">All Languages</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="php">PHP</option>
                <option value="typescript">TypeScript</option>
            </select>

            <button
                onClick={() => onSearch(query, language)}
                className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg"
            >
                Search
            </button>

        </div>
    );
}