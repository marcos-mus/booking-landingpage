import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import "./header.scss";

const Header = ({ hasBtn }) => {
  return (
    <div className="header">
      <h1>Discover the best hotels in DRCongo</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quam
        corporis consectetur.
      </p>

      {hasBtn && (
        <Link to="/register" className="header__btn">
          Get Started
        </Link>
      )}
      <SearchBar />
    </div>
  );
};

export default Header;
