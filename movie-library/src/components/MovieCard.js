import React, { useEffect, useState } from 'react';

export default function MovieCard({ movie, onAdd, onRemove, isWatchlist }) {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://dummyimage.com/500x750/cccccc/000000&text=No+Image';

  const [inWL, setInWL] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('watchlist')) || [];
    setInWL(stored.some(m => m.id === movie.id));
  }, [movie.id]);

  function handleAdd() {
    if (onAdd) onAdd(movie);
    setInWL(true);
  }

  function handleRemove() {
    if (onRemove) onRemove(movie.id);
    const stored = JSON.parse(localStorage.getItem('watchlist')) || [];
    const updated = stored.filter(m => m.id !== movie.id);
    localStorage.setItem('watchlist', JSON.stringify(updated));
    setInWL(false);
  }

  return (
    <article className="card" role="listitem">
      <div className="poster-wrap">
        <img src={poster} alt={movie.title} className="poster" />
      </div>
      <div className="card-body">
        <h3 className="title" title={movie.title}>{movie.title}</h3>
        <p className="meta">Rating: {movie.vote_average ?? '—'} • {movie.release_date ?? '—'}</p>
        <div className="card-actions">
          {!isWatchlist && (
            <button className="btn" onClick={handleAdd} disabled={inWL}>
              {inWL ? 'Added' : 'Add to Watchlist'}
            </button>
          )}
          {isWatchlist && (
            <button className="btn btn-danger" onClick={handleRemove}>Remove</button>
          )}
        </div>
      </div>
    </article>
  );
}
