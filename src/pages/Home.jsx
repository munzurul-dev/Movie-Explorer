import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const featureCards = [
  { title: 'Trending Picks', text: 'Explore the latest crowd favorites across genres and decades.' },
  { title: 'Smart Search', text: 'Find your next obsession in seconds with live title searching.' },
  { title: 'Detailed Insights', text: 'See summaries, ratings, release dates, and more in every movie card.' },
];

function Home() {
  return (
    <div className="page-shell">
      <Navbar />

      <main>
        <section className="hero-section">
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="eyebrow">Discover your next favorite</span>
              <h1>Explore thousands of movies and shows.</h1>
              <p>
                Dive into a world of popular classics, trending hits, and hidden gems — all in one
                cinematic dashboard.
              </p>
              <div className="hero-actions">
                <Link to="/movies" className="primary-btn">
                  Explore Now
                </Link>
                <a href="#features" className="secondary-btn">
                  View Features
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow dark">Why MovieExplorer</span>
              <h2>Built for movie lovers.</h2>
            </div>

            <div className="feature-grid">
              {featureCards.map((feature) => (
                <article key={feature.title} className="feature-card">
                  <div className="feature-icon">★</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
