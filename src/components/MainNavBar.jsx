import { Link } from "react-router-dom";
import "./MainNavBar.css";
function MainNavBar() {
  return (
    <header>
      <nav className="navbar">
        <Link className="nav-link" to="/">
          <img
            className="logo-img"
            src="https://cdn-icons-png.flaticon.com/512/4205/4205494.png"
            alt="logo"
          />
        </Link>
        <Link className="nav-link" to="/">
          Home
        </Link>

        <Link className="nav-link" to="/shoes">
          Shop
        </Link>

        <Link className="nav-link" to="/offers">
          Offers
        </Link>
      </nav>
    </header>
  );
}
export default MainNavBar;
