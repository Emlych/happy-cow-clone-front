import avatar from "../assets/img/nobody.svg";
import { useEffect } from "react";
import axios from "axios";
//Contains : edit profil picture
// photos and reviews of nearby city
// favorites
// lists
const Profile = ({ name }) => {
  // const urlbase = "https://happy-cow-eld.herokuapp.com";
  const urlbase = "http://localhost:4000";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${urlbase}/favorites`);
        console.log("response here ==>", response);
      } catch (error) {
        console.log("error message ==>", error.message);
        console.log("error response ==>", error.response);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="profile">
      <div>
        <img src={avatar} alt="cow profile pic" />
        {name}
      </div>
      <div>
        <h2>Favoris</h2>
      </div>
    </div>
  );
};

export default Profile;
