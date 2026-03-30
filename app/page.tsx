"use client";

import { useEffect, useState } from "react";
import RepoCard from "../components/RepoCard";
import SearchBar from "../components/SearchBar";
import SkeletonCard from "../components/SkeletonCard";
import { fetchRepos } from "../lib/api";
import { FaGithub } from "react-icons/fa";


export default function Home() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadRepos = async (query = "stars:>10000", language = "") => {
    setLoading(true);
    const data = await fetchRepos(query, language);
    setRepos(data.slice(0, 12));
    setLoading(false);
  };

  useEffect(() => {
    loadRepos();
  }, []);

  return (
    <main className="min-h-screen p-6 bg-[#0f172a] text-white">

      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex justify-center items-center gap-2">
          <FaGithub size={28} />
          <h1 className="text-2xl font-semibold">
            GitHub Repo Explorer
          </h1>
        </div>

        <p className="text-gray-400 text-sm mt-2">
          Search and explore popular repositories
        </p>
      </div>

      <SearchBar onSearch={loadRepos} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {loading
          ? Array(6).fill(0).map((_, i) => <SkeletonCard key={i} />)
          : repos.map((repo: any, i) => (
            <RepoCard key={i} repo={repo} />
          ))
        }

      </div>

    </main>
  );
}