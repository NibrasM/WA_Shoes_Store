import { Link } from "react-router-dom";
import "./MainNavBar.css";
function MainNavBar() {
  return (
    <header>
      <nav className="navbar">
        <img
          className="logo-img"
          src="https://img.freepik.com/premium-vector/shoes-store-logo-template-design_316488-430.jpg"
          alt="logo"
        />
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/shoes">
          Shoes
        </Link>
      </nav>
    </header>
  );
}
export default MainNavBar;
