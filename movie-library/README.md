# Movie Library

A responsive web application to browse movies and manage a personal "watchlist". Users can search for movies, view popular movies, and save their favorites in a watchlist stored in `localStorage`.

---

## Features

* Fetch popular movies from [TMDB](https://www.themoviedb.org/).
* Search movies by title.
* Add movies to a personal watchlist.
* View and remove movies from the watchlist.
* Dark/Light theme toggle.
* Fully responsive and mobile-friendly design.

---

## Tech Stack

* **Frontend:** React.js
* **Routing:** React Router
* **Styling:** CSS (custom, responsive design)
* **API:** TMDB API

---

## Getting Started

### Prerequisites

* Node.js >= 18
* npm >= 10

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Nikkkkillll/FilmShelf.git
cd movie-library-app
```

2. Install dependencies:

```bash
npm install
```

3.Environment Variables

This project requires an API key from TMDB. 

Sign up at https://www.themoviedb.org/ and get an API key.
Create a `.env` file in the root of the project:
   
REACT_APP_TMDB_API_KEY=YOUR_TMDB_API_KEY_HERE

4. Start the development server:

```bash
npm start
```

Open [http://localhost:3000] in your browser.


## Running Tests

Currently, no automated test cases are included. You can add tests using Jest and React Testing Library:

```bash
npm test
```

---

## Assumptions and Design Choices

* Watchlist data is stored on the client side using `localStorage`.
* TMDB API key is stored in `.env` and accessed via `process.env.REACT_APP_TMDB_API_KEY`.
* Movie posters without an image fallback to a placeholder.
* Focused on mobile-first responsive design.
* Light/Dark theme toggle is stored in `localStorage`.

---

