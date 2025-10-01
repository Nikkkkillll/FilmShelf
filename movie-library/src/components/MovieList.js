import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList({ movies = [], onAdd, onRemove, isWatchlist = false }) {
  return (
    <div className="movie-grid" role="list">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onAdd={onAdd}
          onRemove={onRemove}
          isWatchlist={isWatchlist}
        />
      ))}
    </div>
  );
}
