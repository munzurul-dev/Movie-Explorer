function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <p>© {year} MovieExplorer</p>
        <div className="footer-links">
          <a href="https://github.com/munzurul-dev" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.instagram.com/muhammadmunzurul?stkn=MW14ODdmYXFscXg5bw==" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
