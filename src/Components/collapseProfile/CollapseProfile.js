import "./collapseProfile.css";
import { Link } from "react-router-dom";

const CollapseProfile = ({ setUser }) => {
  return (
    <nav className="collapse-profile">
      <div>
        <Link to={"/members/profile"} className="primary link">
          My Profile
        </Link>
      </div>
      <div className="line"></div>
      <div onClick={() => setUser(null)}>Logout</div>
    </nav>
  );
};

export default CollapseProfile;
