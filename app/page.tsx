"use client";

import { useEffect, useState } from "react";
import RepoCard from "../components/RepoCard";
import SearchBar from "../components/SearchBar";
import SkeletonCard from "../components/SkeletonCard";
import PageWrapper from "../components/PageWrapper";
import { fetchRepos } from "../lib/api";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

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

    const handleFocus = () => {
      loadRepos();
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <PageWrapper>
      <main className="min-h-screen bg-[#0f172a] text-white p-6">

        <div className="mb-6">

          <div className="flex justify-end">
            <Link href="/favorites" className="text-blue-400">
              Favorites ❤️
            </Link>
          </div>

          <div className="flex flex-col items-center mt-2">
            <div className="flex items-center gap-2">
              <FaGithub size={26} />
              <h1 className="text-2xl font-semibold">
                GitHub Repo Explorer
              </h1>
            </div>

            <p className="text-gray-400 text-sm mt-1">
              Search and explore popular repositories
            </p>
          </div>

        </div>

        <SearchBar onSearch={loadRepos} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading
            ? Array(6).fill(0).map((_, i) => <SkeletonCard key={i} />)
            : repos.map((repo: any) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
        </div>

      </main>
    </PageWrapper>
  );
}