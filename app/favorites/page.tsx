"use client";

import { useEffect, useState } from "react";
import RepoCard from "../../components/RepoCard";
import PageWrapper from "../../components/PageWrapper";
import Link from "next/link";

export default function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("favorites") || "[]");
        setFavorites(data);
    }, []);

    return (
        <PageWrapper>
            <main className="min-h-screen bg-[#0f172a] text-white p-6">

                <div className="flex justify-between mb-6">
                    <h1 className="text-2xl">❤️ Favorite Repositories</h1>
                    <Link href="/" className="text-blue-400">Back ←</Link>
                </div>

                {favorites.length === 0 ? (
                    <p>No favorites yet</p>
                ) : (
                    <div className="grid md:grid-cols-2 gap-4">
                        {favorites.map((repo: any) => (
                            <RepoCard key={repo.id} repo={repo} />
                        ))}
                    </div>
                )}

            </main>
        </PageWrapper>
    );
}