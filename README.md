<h1 align="center">🚀 Serverless Data Pipeline</h1>

<p align="center">
  <em>A fully autonomous, GitHub-native data aggregation pipeline and live dashboard.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</p>

### ⚡ Elevator Pitch

> This project demonstrates a zero-cost, serverless CI/CD architecture. It utilizes a **Node.js** scraper triggered by a **GitHub Actions** cron job to fetch live data from external APIs. The data is formatted and committed back to the repository as a flat JSON database (`data.json`), which is then dynamically rendered by a responsive **Tailwind CSS** dashboard hosted continuously on **GitHub Pages**.

### 🏗️ System Architecture

```text
serverless-data-pipeline/
├── .github/
│   └── workflows/
│       └── update-data.yml    # Cron job automation (Runs daily)
├── scraper.js                 # Node.js data fetcher & JSON formatter
├── data.json                  # Flat-file database (Auto-updated)
└── index.html                 # Frontend dashboard (Tailwind + Vanilla JS)
🚀 Live Demo
You can view the live, auto-updating dashboard here: [https://abirboss8055.github.io/serverless-data-pipeline/]

⚙️ How It Works
The Cron Job: Every day at midnight (UTC), GitHub Actions spins up an Ubuntu runner.

The Worker: The runner executes scraper.js, which hits the GitHub REST API to find the top 5 trending JavaScript repositories.

The Database: The data is processed and saved into data.json.

The Deployment: The GitHub Action automatically commits the changes to the main branch, which triggers GitHub Pages to serve the updated UI seamlessly.
```