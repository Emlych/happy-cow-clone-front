import "./homeSection.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

//Import component
import HomeCard from "../homeCard/HomeCard";

//Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const HomeSection = ({
  title,
  restaurantData,
  toggleModal,
  token,
  urlbase,
}) => {
  //Fetch list of favorites for registered user (if logged in)
  const [favorites, setFavorites] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${urlbase}/favorites`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log("favorites of : ", response.data.favorites);
        setFavorites(response.data.favorites);
      } catch (error) {
        console.log("error message ==>", error.message);
        console.log("error response ==>", error.response);
      }
    };
    if (token) fetchData();
  }, []);

  //Add or delete favorites when click on hearts
  const handleFavorite = async (isFav, item) => {
    console.log("my item fav is ==>", isFav);
    try {
      const response = await axios.post(`${urlbase}/favorite/handle`, item, {
        headers: { authorization: `Bearer ${Cookies.get("userToken")}` },
      });
      console.log("response from handle favorite in back :", response.data);
      setFavorites(response.data.favorite);
      console.log(
        "Here is what i put in favorites state :",
        response.data.favorite
      );
    } catch (error) {
      console.log("error message ==>", error.message);
    }
  };

  return (
    <section className="homesection">
      <div className="homesection__smallscreen">
        <h2>{title}</h2>

        <div className="caroussel">
          {restaurantData.slice(0, 10).map((item, index) => {
            return (
              <HomeCard
                key={item.placeId}
                item={item}
                index={index}
                toggleModal={toggleModal}
                handleFavorite={handleFavorite}
                token={token}
              />
            );
          })}
        </div>

        <div className="homesection__link">
          <span>View all</span>
          <FontAwesomeIcon icon={faGreaterThan} />
        </div>
      </div>

      <div className="homesection__bigscreen">
        <div className="homesection__title">
          <h2>{title}</h2>
          <div className="homesection__link">
            <span>View all</span>
            <FontAwesomeIcon icon={faGreaterThan} />
          </div>
        </div>

        <div className="caroussel">
          {restaurantData.slice(0, 10).map((item, index) => {
            return (
              <HomeCard
                key={item.placeId}
                item={item}
                index={index}
                toggleModal={toggleModal}
                favorites={favorites}
                handleFavorite={handleFavorite}
                token={token}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
