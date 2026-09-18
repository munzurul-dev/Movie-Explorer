function stripHtml(text = '') {
  return text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function MovieCard({ movie, onSelect }) {
  const imageUrl = movie.image || 'https://via.placeholder.com/300x420?text=Movie';
  const rating = movie.rating ? `${movie.rating.toFixed(1)}` : 'N/A';

  return (
    <article className="movie-card">
      <div className="movie-poster-wrap">
        <img src={imageUrl} alt={movie.name} className="movie-poster" />
      </div>

      <div className="movie-info">
        <h3>{movie.name}</h3>
        <div className="movie-meta">
          <span>⭐ {rating}</span>
          <span>📅 {movie.premiered === 'N/A' ? 'Unknown' : movie.premiered.slice(0, 4)}</span>
        </div>
        <p>{stripHtml(movie.summary).slice(0, 90) || 'No description available.'}...</p>
        <button type="button" className="primary-btn card-btn" onClick={() => onSelect(movie)}>
          See Details
        </button>
      </div>
    </article>
  );
}

export default MovieCard;
