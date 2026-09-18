import { useEffect, useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';

const API_URL = 'https://api.tvmaze.com';

function normalizeMovie(item) {
  const show = item.show ?? item;

  return {
    id: show.id,
    name: show.name,
    image: show.image?.original || show.image?.medium || 'https://via.placeholder.com/300x420?text=No+Poster',
    rating: show.rating?.average ?? 0,
    premiered: show.premiered || 'N/A',
    summary: show.summary || 'No summary available for this title yet.',
    genres: show.genres?.length ? show.genres : ['Drama'],
    status: show.status || 'Unknown',
    language: show.language || 'Unknown',
    officialSite: show.officialSite || '',
    type: show.type || 'Show',
  };
}

async function fetchMovies(query = '') {
  const endpoint = query
    ? `${API_URL}/search/shows?q=${encodeURIComponent(query)}`
    : `${API_URL}/shows`;

  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error('Failed to load movies.');
  }

  const data = await response.json();
  return (query ? data : data).map((item) => normalizeMovie(item));
}

function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    const loadMovies = async () => {
      setLoading(true);
      setError('');

      try {
        const results = await fetchMovies(query);
        if (active) {
          setMovies(results);
        }
      } catch (fetchError) {
        if (active) {
          setError(fetchError.message || 'Something went wrong while loading movies.');
          setMovies([]);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadMovies();

    return () => {
      active = false;
    };
  }, [query]);

  const emptyMessage = useMemo(() => {
    if (!loading && query && movies.length === 0) {
      return `No movies found for “${query}”.`;
    }

    if (!loading && !query && movies.length === 0) {
      return 'No movies available right now.';
    }

    return '';
  }, [loading, movies.length, query]);

  return (
    <div className="page-shell">
      <Navbar />

      <main className="movies-page">
        <div className="container">
          <section className="movies-toolbar">
            <SearchBar
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for a movie or show..."
            />
          </section>

          {loading ? (
            <div className="state-box">Loading movies...</div>
          ) : error ? (
            <div className="state-box error-box">{error}</div>
          ) : emptyMessage ? (
            <div className="state-box">{emptyMessage}</div>
          ) : (
            <section className="movie-grid">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onSelect={setSelectedMovie} />
              ))}
            </section>
          )}
        </div>
      </main>

      <Footer />
      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
}

export default Movies;
