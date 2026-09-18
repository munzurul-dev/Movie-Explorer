function stripHtml(text = "") {
  return text
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  const releaseYear =
    movie.premiered === "N/A"
      ? "Unknown"
      : new Date(movie.premiered).getFullYear();
  const summary = stripHtml(movie.summary) || "No summary available.";

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div className="movie-modal" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close movie details"
        >
          ✕
        </button>

        <div className="modal-poster-wrap">
          <img src={movie.image} alt={movie.name} className="modal-poster" />
        </div>

        <div className="modal-body">
          <h2>{movie.name}</h2>
          <div className="movie-meta modal-meta">
            <span>
              ⭐ Rating: {movie.rating ? movie.rating.toFixed(1) : "N/A"}
            </span>
            <span>📅 Release: {releaseYear}</span>
          </div>

          <div className="modal-details">
            <p>
              <strong>Genres:</strong> {movie.genres?.join(", ") || "Unknown"}
            </p>
            <p>
              <strong>Status:</strong> {movie.status}
            </p>
            <p>
              <strong>Language:</strong> {movie.language}
            </p>
          </div>

          <div className="modal-summary">
            <h3>Overview</h3>
            <p>{summary}</p>
          </div>

          <button
            type="button"
            className="secondary-btn modal-action"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
