"use client";

import { useState, useEffect } from "react";
import { getFavorites, toggleFavorite } from "../lib/favorites";

export default function RepoCard({ repo }: any) {
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        const favs = getFavorites();
        setIsFav(favs.some((r: any) => r.id === repo.id));
    }, [repo.id]);

    const handleFav = () => {
        const updated = toggleFavorite(repo);
        setIsFav(updated.some((r: any) => r.id === repo.id));
    };

    return (
        <div className="border border-gray-700 p-4 rounded-lg bg-[#1e293b] 
    hover:scale-[1.02] hover:bg-[#243447] 
    transition-all duration-200 ease-in-out cursor-pointer">

            <button onClick={handleFav} className="float-right text-xl">
                {isFav ? "❤️" : "🤍"}
            </button>

            <h2 className="text-lg font-semibold">{repo.name}</h2>

            <p className="text-sm text-gray-400 mt-2">
                {repo.description || "No description"}
            </p>

            <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-300">
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
                <span>🐞 {repo.open_issues_count}</span>
                <span>👀 {repo.watchers_count}</span>
            </div>

            <a
                href={repo.html_url}
                target="_blank"
                className="inline-block mt-3 text-blue-400 hover:underline"
            >
                View Repo →
            </a>

        </div>
    );
}