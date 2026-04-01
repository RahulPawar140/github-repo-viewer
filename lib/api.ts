export async function fetchRepos(
    query = "stars:>10000",
    language = "",
    sort = "stars",
    page = 1
) {
    let searchQuery = query || "stars:>10000";

    if (language) {
        searchQuery += ` language:${language}`;
    }

    const res = await fetch(
        `https://api.github.com/search/repositories?q=${searchQuery}&sort=${sort}&order=desc&page=${page}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
            },
        }
    );

    const data = await res.json();
    return data.items || [];
}