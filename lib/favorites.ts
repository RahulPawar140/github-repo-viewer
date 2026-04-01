export const getFavorites = () => {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export const saveFavorites = (repos: any[]) => {
    localStorage.setItem("favorites", JSON.stringify(repos));
};

export const toggleFavorite = (repo: any) => {
    const favorites = getFavorites();

    const exists = favorites.find((r: any) => r.id === repo.id);

    let updated;
    if (exists) {
        updated = favorites.filter((r: any) => r.id !== repo.id);
    } else {
        updated = [...favorites, repo];
    }

    saveFavorites(updated);
    return updated;
};