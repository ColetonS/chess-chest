import { FaShoppingCart, FaUser } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="home-button">
          <Link>
            <h1 to="/">Chess Chest</h1>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/cart">
            <h2>
              <FaShoppingCart />
              Cart
            </h2>
          </Link>
          <Link to="/login">
            <h2>
              <FaUser />
              Sign In
            </h2>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
