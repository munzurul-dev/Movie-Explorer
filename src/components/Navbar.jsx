import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" aria-label="MovieExplorer home">
          🎬 MovieExplorer
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/movies" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Movies
          </NavLink>
        </nav>

        <Link to="/movies" className="primary-btn nav-btn">
          Browse Movies
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
