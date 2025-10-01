import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState('');
  function submit(e) {
    e.preventDefault();
    onSearch(q.trim());
  }

  return (
    <form className="searchbar" onSubmit={submit}>
      <input
        aria-label="Search movies"
        className="search-input"
        placeholder="Search movies by title..."
        value={q}
        onChange={e => setQ(e.target.value)}
      />
      <button className="btn-primary" type="submit">Search</button>
    </form>
  );
}
