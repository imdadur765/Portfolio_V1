import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="navbar-minimal">
      <div className="nav-container-minimal">
        <Link to="/" className="nav-logo-minimal" style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          <img src="/assassins-creed-logo.png" alt="AC" className="mini-logo-img" />
          IR<span>.</span>
        </Link>
        <a
          href="https://www.fiverr.com/imdadur488/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hire-mini"
        >
          Hire Me
        </a>
      </div>
    </nav>
  )
}

export default Navbar