import "./homeSection.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

//Import component
import HomeCard from "../homeCard/HomeCard";

//Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const HomeSection = ({ title, restaurantData, toggleModal }) => {
  const urlbase = "https://happy-cow-eld.herokuapp.com";
  // const urlbase = "http://localhost:4000";

  //Fetch list of favorites for registered user (if logged in)
  const [favorites, setFavorites] = useState(null);
  useEffect(() => {
    const token = Cookies.get("userToken");
    const fetchData = async () => {
      try {
        const response = await axios.get(`${urlbase}/favorites`, {
          headers: { authorization: `Bearer ${token}` },
        });
        setFavorites(response.data.favorites);
      } catch (error) {
        console.log("error message ==>", error.message);
        console.log("error response ==>", error.response);
      }
    };
    if (token) fetchData();
  }, []);

  //Add or delete favorites when click on hearts
  const handleFavorite = (isFav, item) => {
    console.log("my item fav is ==>", isFav);
    //Add favorite in database
    const addFavorite = async () => {
      try {
        const response = await axios.post(`${urlbase}/favorite/add`, item, {
          headers: { authorization: `Bearer ${Cookies.get("userToken")}` },
        });
        console.log("favorite succesfully added: ", response.data);
      } catch (error) {
        console.log("error message ==>", error.message);
      }
    };
    //Delete favorite from database
    const deleteFavorite = async () => {
      try {
        const response = await axios.delete(`${urlbase}/favorite/delete`, {
          headers: { Authorization: `Bearer ${Cookies.get("userToken")}` },
          data: item,
        });
        console.log("favorite succesfully deleted: ", response.data);
      } catch (error) {
        console.log("error message ==>", error.message);
      }
    };
    !isFav ? addFavorite() : deleteFavorite();
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
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
