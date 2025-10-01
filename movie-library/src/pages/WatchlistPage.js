import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';

export default function WatchlistPage() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(stored);
  }, []);

  function removeFromWatchlist(id) {
    const updated = watchlist.filter(m => m.id !== id);
    setWatchlist(updated);
    localStorage.setItem('watchlist', JSON.stringify(updated));
  }

  return (
    <section>
      <div className="container">
        <h2 className="section-title">My Watchlist</h2>
        {watchlist.length === 0 ? (
          <div className="center">Your watchlist is empty. Add movies from Home.</div>
        ) : (
          <MovieList movies={watchlist} isWatchlist onRemove={removeFromWatchlist} />
        )}
      </div>
    </section>
  );
}
