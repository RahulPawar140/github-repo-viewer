export default function RepoCard({ repo }: any) {
    const isTrending = repo.stargazers_count > 50000;

    return (
        <div className="border border-gray-700 p-4 rounded-lg bg-[#1e293b] hover:bg-[#243447] transition">

            {isTrending && (
                <span className="text-xs text-orange-400">
                    🔥 Trending
                </span>
            )}

            <h2 className="text-lg font-semibold mt-1">{repo.name}</h2>

            <p className="text-sm text-gray-400 mt-2">
                {repo.description || "No description"}
            </p>

            <div className="flex justify-between mt-3 text-sm text-gray-300">
                <span>⭐ {repo.stargazers_count}</span>
                <span>{repo.language || "N/A"}</span>
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