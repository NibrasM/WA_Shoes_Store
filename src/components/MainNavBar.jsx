import { Link } from "react-router-dom";

const MainNavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/shoes"> Shoes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavBar;
