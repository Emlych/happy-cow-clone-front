import avatar from "../assets/img/nobody.svg";
import { useState, useEffect } from "react";
//Import restaurant data
import restaurantData from "../assets/data/restaurants.json";
import axios from "axios";
import HomeCard from "../Components/homeCard/HomeCard";
//Contains : edit profil picture
// photos and reviews of nearby city

const Profile = ({ name, token }) => {
  const [favorites, setFavorites] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // const urlbase = "https://happy-cow-eld.herokuapp.com";
  const urlbase = "http://localhost:4000";

  //get array of favorite places per placeId
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${urlbase}/favorites`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log("response ==>", response.data.favorites);
        // filter restaurantData to display only those with same placeId than favorites
        const favoriteRestaurants = restaurantData.filter((element) => {
          return response.data.favorites.some((item) => {
            return item === element.placeId;
          });
        });
        console.log("favorite restaurants : ", favoriteRestaurants);
        setFavorites(favoriteRestaurants);

        setIsLoading(false);
      } catch (error) {
        console.log("error message ==>", error.message);
        console.log("error response ==>", error.response);
      }
    };
    fetchData();
  }, [token]);
  console.log(favorites);
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
