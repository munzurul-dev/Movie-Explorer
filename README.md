# 🎬 Movie Explorer

A responsive Movie Explorer application built with React that allows users
to browse, search, and explore TV shows using the TVMaze API.

## 🌐 Live Demo

https://movieexplorer-next-level.netlify.app/

## 📂 GitHub Repository

https://github.com/munzurul-dev/Movie-Explorer

---

## ✨ Features

- 🏠 Modern Home Page
- 🎬 Hero Banner
- 🔍 Search shows by title
- 🎞️ Browse all available shows
- 🖼️ Show poster images
- ⭐ Show ratings
- 📅 Release year
- 🎭 Show genres
- 📖 Detailed show information
- 🪟 Interactive details modal
- ❌ Close modal button
- 🖱️ Close modal by clicking outside
- ⏳ Loading state
- ⚠️ Error handling
- 📭 No results state
- 📱 Fully responsive design
- 💻 Mobile, tablet and desktop support

---

## 🛠️ Technologies Used

- React
- JavaScript
- React Router
- Tailwind CSS
- Vite
- TVMaze API

---

## 🌐 API

This project uses the free TVMaze API.

Official documentation:

https://www.tvmaze.com/api

### Endpoints Used

Get all shows:

```text
https://api.tvmaze.com/shows

Search shows:

https://api.tvmaze.com/search/shows?q={query}

TVMaze provides show search through the /search/shows?q=:query
endpoint and a show index through /shows.

📁 Project Structure
movie-explorer/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieModal.jsx
│   │   ├── SearchBar.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Movies.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── README.md
├── package.json
└── vite.config.js
🚀 Getting Started

Follow these steps to run the project locally.

1. Clone the repository
git clone https://github.com/munzurul-dev/Movie-Explorer.git
2. Go to the project directory
cd Movie-Explorer
3. Install dependencies
npm install
4. Start the development server
npm run dev

The application will run on a local development server.

🏗️ Build for Production

To create a production build:

npm run build

To preview the production build:

npm run preview
📱 Responsive Design

The application is designed to provide a smooth experience across different
screen sizes.

Mobile
Single-column movie grid
Responsive navigation
Touch-friendly buttons
Responsive modal
Tablet
Multi-column layout
Optimized spacing
Responsive cards
Desktop
3–4 column movie grid
Large hero section
Optimized content spacing
🎯 Assignment Requirements

This project was developed according to the Movie Explorer assignment
requirements.

Home Page
Navbar
Application branding
Navigation links
Hero banner
Call-to-action button
Footer
Movie Listing Page
Search bar
API integration
Responsive movie/show cards
Movie/show poster
Title
Release year
Rating
See Details button
Details Modal
Large poster
Title
Rating
Release date
Genre
Overview
Close button
Outside-click close interaction
👨‍💻 Author

Muhammad Munzurul

GitHub:
https://github.com/munzurul-dev

📄 License

This project was created for educational purposes as part of a React
development assignment.

© 2026 Muhammad Munzurul
