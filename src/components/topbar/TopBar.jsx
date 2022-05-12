import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./topbar.scss";

const TopBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="topbar">
      <div className="topbar__logo">
        <Link to="/" style={{ color: "white" }}>
          Go Booking{" "}
        </Link>
      </div>
      {!user ? (
        <div className="topbar__buttons">
          <Link to="/login" className="topbar__buttons__button">
            Login
          </Link>
          <Link to="/register" className="topbar__buttons__button">
            Register
          </Link>
        </div>
      ) : (
        user.username
      )}
    </div>
  );
};

export default TopBar;
