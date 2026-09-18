function SearchBar({ value, onChange, placeholder = 'Search for a movie...' }) {
  return (
    <div className="search-bar-wrap">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="search-bar"
        placeholder={placeholder}
        aria-label="Search for movie"
      />
    </div>
  );
}

export default SearchBar;
