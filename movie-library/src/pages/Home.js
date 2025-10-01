import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=`;


export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [watchlist, setWatchlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('watchlist')) || [];
    } catch { return []; }
  });

  useEffect(() => {
    fetchPopular();
    // eslint-disable-next-line
  }, []);

  async function fetchPopular() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(POPULAR_URL);
      const data = await res.json();
      if (!data.results) throw new Error('Failed to load popular movies');
      setMovies(data.results);
    } catch (err) {
      setError(err.message || 'Error fetching movies');
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch(query) {
    if (!query) return fetchPopular();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(SEARCH_URL + encodeURIComponent(query));
      const data = await res.json();
      if (!data.results) throw new Error('No results found');
      setMovies(data.results);
    } catch (err) {
      setError(err.message || 'Search failed');
    } finally {
      setLoading(false);
    }
  }

  function addToWatchlist(movie) {
    const exists = watchlist.some(m => m.id === movie.id);
    if (exists) return;
    const updated = [movie, ...watchlist];
    setWatchlist(updated);
    localStorage.setItem('watchlist', JSON.stringify(updated));
  }

  return (
    <section>
      <div className="container">
        <SearchBar onSearch={handleSearch} />
        {loading && <div className="center">Loading movies...</div>}
        {error && <div className="center error">{error}</div>}
        {!loading && !error && (
          <MovieList movies={movies} onAdd={addToWatchlist} />
        )}
      </div>
    </section>
  );
}
