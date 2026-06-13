# 🌌 Modern Developer Portfolio

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![ESLint](https://img.shields.io/badge/ESLint-9.0-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

A premium, highly interactive, and visually stunning single-page developer portfolio designed to showcase skills, experience, education, and open-source contributions. 

Built with **React 19**, **Vite 8**, and styled with custom CSS combined with **Tailwind CSS v4** for next-level visual design, fluid layouts, glassmorphic cards, and custom micro-animations.

---

## ✨ Features

- **💫 Interactive Particle Background:** Features an immersive and interactive particle background powered by HTML Canvas to keep the user engaged.
- **⏳ Dynamic Loader:** Custom page loading screen that gracefully transitions into the main app contents.
- **🎭 Typing Effect:** Smooth typing animations on the landing text to introduce the user’s main skill sets and roles.
- **📜 Scroll Reveal System:** High-performance viewport animations utilizing the Intersection Observer API via custom React hooks to slide/scale elements into view.
- **🌗 Light & Dark Theme Toggle:** Fully custom light and dark mode toggling, complete with color tokens mapped to CSS variables for uniform transition.
- **🛠️ Automated GitHub Repository Fetching:** Connects directly with the GitHub API to fetch and display the user's latest public repositories dynamically with star/fork count and main programming language colors.
- **📱 Fully Responsive Design:** Optimized for mobile, tablet, and desktop screens with glassmorphic cards, custom layouts, and fluid margins.

---

## 🛠️ Tech Stack & Libraries

- **Frontend Core:** React 19 (Functional Components & Custom Hooks)
- **Styling & Theme:** Tailwind CSS v4 & Vanilla CSS Variables
- **Build Tool & HMR:** Vite 8
- **Linting & Code Quality:** ESLint

---

---

## 🚀 Projects Showcased

1. **LEXI AI (AI Legal Query Assistance & Prediction Portal):** AI-based legal assistance platform offering instant query support and case-outcome prediction using NLP and Machine Learning.
2. **HERITIQ (Artisan Marketplace Platform):** Full-stack e-commerce marketplace connecting local artisans with customers. Built using MongoDB, Flask, and HTML/CSS/JS.
3. **HealBot (AI-Powered Medicine Recommendation System):** Treatment suggestion engine based on user symptoms, utilizing NLP, Machine Learning, and Flask.
4. **Text-to-SQL Converter (Natural Language to SQL Translator):** Translates natural language questions into accurate SQL queries using NLP.

---

## ⚡ Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/shivachandirank/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run in Development Mode
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port specified in terminal).

### 4. Build for Production
To bundle and optimize the files for deployment:
```bash
npm run build
```
This output is saved to the `/dist` folder. To preview the build locally:
```bash
npm run preview
```

---

## ⚙️ Customization

To personalize this portfolio with your own details:
1. **GitHub Repositories:** Open [src/App.jsx](file:///c:/Users/acer/OneDrive/Desktop/HACKTHON/portfolio/src/App.jsx) and edit the `username` prop passed to `<GitHubRepos />` on **Line 58**:
   ```jsx
   <GitHubRepos username="your-github-username" />
   ```
2. **Featured Creations:** Open [src/components/Projects.jsx](file:///c:/Users/acer/OneDrive/Desktop/HACKTHON/portfolio/src/components/Projects.jsx) and edit the `projects` array at the top of the file.
3. **Bio, Work Experience & Education:** Modify the static data in `About.jsx`, `Experience.jsx`, and `Education.jsx` under `src/components/`.

---

## 📝 License

This project is open-source and available under the MIT License.



portfolio/
├── index.html                 # Main website template
├── sw.js                      # PWA Service Worker caching module
├── RESUME SIVACHANDIRAN.pdf   # Downloadable curriculum vitae (CV)
├── profile.jpg                # Main profile headshot
└── projects/                  # Mock screenshots for interactive demo triggers
    ├── healbot.png
    ├── heritiq.png
    ├── lexi-ai.png
    ├── rag-system.png
    └── text-to-sql.png



  📬 Contact & Connect
Email: shivachandirank@gmail.com
GitHub: github.com/shivachandirank
LinkedIn: linkedin.com/in/sivachandiran-k
Phone: +91 8098127558
