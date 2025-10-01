import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import WatchlistPage from './pages/WatchlistPage';
import './App.css';

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <Router>
      <header className="site-header">
        <div className="brand">
          <Link to="/" className="logo">MovieLibrary</Link>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/watchlist">Watchlist</Link>
        </nav>
        <div className="actions">
          <button className="btn-theme" onClick={() => setDark(d => !d)}>
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>FilmShelf • Powered by TMDB</p>
      </footer>
    </Router>
  );
}

export default App;

