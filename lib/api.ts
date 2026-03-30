export async function fetchRepos(query = "stars:>10000", language = "") {
    let searchQuery = query;

    if (language) {
        searchQuery += ` language:${language}`;
    }

    const res = await fetch(
        `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&order=desc`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
            },
            cache: "no-store",
        }
    );

    const data = await res.json();
    return data.items || [];
}