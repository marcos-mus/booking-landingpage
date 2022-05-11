import { Link } from "react-router-dom";
import "./topbar.scss";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar__logo">Go Booking</div>
      <div className="topbar__buttons">
        <Link to="/login" className="topbar__buttons__button">
          Login
        </Link>
        <Link to="/register" className="topbar__buttons__button">
          Register
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
