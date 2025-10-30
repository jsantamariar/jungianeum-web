import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <img
            src="/logo-jungianeum-white-no-bg.png"
            alt="Jungianeum Logo"
            className="nav-logo"
          />
        </Link>
        <Link to="/menu" className="nav-menu-button">
          MENU
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
