import avatar from "../assets/img/nobody.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import HomeCard from "../Components/homeCard/HomeCard";
//Contains : edit profil picture
// photos and reviews of nearby city

const Profile = ({ name, token }) => {
  const [favorites, setFavorites] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // const urlbase = "https://happy-cow-eld.herokuapp.com";
  const urlbase = "http://localhost:4000";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `${urlbase}/favorites/?userToken=${token}`,
          `${urlbase}/favorites`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("response here ==>", response.data.favorites);
        setFavorites(response.data.favorites);
        setIsLoading(false);
      } catch (error) {
        console.log("error message ==>", error.message);
        console.log("error response ==>", error.response);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div className="profile">
      <div>
        <img src={avatar} alt="cow profile pic" />
        {name}
      </div>
      <div className="favorite">
        <h2>Favoris</h2>
        {isLoading ? (
          <span>Favorites are loading</span>
        ) : (
          <div className="caroussel">
            {favorites.map((item, index) => {
              return (
                <div key={index}>
                  <HomeCard item={item} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
