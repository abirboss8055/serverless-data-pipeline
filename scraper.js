const fs = require('fs');

async function fetchTrendingRepos() {
    try {
        console.log("Fetching top JavaScript repositories...");
        
        // গিটহাবের ফ্রি API থেকে ডেটা আনা হচ্ছে
        const response = await fetch('https://api.github.com/search/repositories?q=language:javascript+stars:>5000&sort=stars&order=desc&per_page=5');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();

        // ডেটাগুলোকে সুন্দর করে সাজানো হচ্ছে
        const repos = data.items.map(repo => ({
            name: repo.name,
            description: repo.description,
            stars: repo.stargazers_count,
            url: repo.html_url,
            fetched_at: new Date().toISOString()
        }));

        // data.json ফাইলে ডেটা সেভ করা হচ্ছে
        fs.writeFileSync('data.json', JSON.stringify(repos, null, 2));
        console.log("Data successfully saved to data.json!");
        
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchTrendingRepos();
