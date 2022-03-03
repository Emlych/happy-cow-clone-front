import "./homecard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import veganTag from "../../assets/img/category_vegan.svg";
import vegStoreTag from "../../assets/img/category_veg-store.svg";
import ratingStars from "../../utils/ratingstars";

//Handle favorites with back
import axios from "axios";
import Cookies from "js-cookie";

function HomeCard({ item, index }) {
  const address = item.address.split(",");
  const [isFavorite, setIsFavorite] = useState(false);
  // // console.log("my item ", item.name, " is favorite", isFavorite);

  //Add or delete favorites
  // const urlbase = "https://happy-cow-eld.herokuapp.com";
  const urlbase = "http://localhost:4000";
  const handleFavorite = () => {
    console.log(isFavorite);
    setIsFavorite(!isFavorite);

    const addFavorite = async () => {
      try {
        console.log("item that I wish to send ==>", item);
        const response = await axios.post(`${urlbase}/favorite/add`, item, {
          headers: { authorization: `Bearer ${Cookies.get("userToken")}` },
        });
        console.log("my response ==>", response);
      } catch (error) {
        console.log("error message ==>", error.message);
        console.log("error response ==>", error.response);
      }
    };
    const deleteFavorite = async () => {
      try {
        console.log("item that I wish to delete ==>", item);
        const response = await axios.delete(`${urlbase}/favorite/delete`, {
          headers: { Authorization: `Bearer ${Cookies.get("userToken")}` },
          data: item,
        });
        console.log("my response ==>", response);
      } catch (error) {
        console.log("error message ==>", error.message);
        console.log("error response ==>", error.response);
      }
    };
    if (isFavorite === true) {
      console.log("add this ", item.name, " to my database.");
      addFavorite();
    } else {
      console.log("still have to handle the delete route in my back");
      deleteFavorite();
    }
  };
  return (
    <div className="homecard">
      <div>
        {/* Use index so website doesn't have to iterate through whole data to find the object with the review info*/}
        <Link to={{ pathname: `/reviews/${index}` }}>
          <img
            src={item.thumbnail}
            alt={item.name}
            className="card__thumbnail"
          />
        </Link>
        <div className="card__icon">
          <div>
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div>
            <FontAwesomeIcon icon={faBookmark} />
          </div>
          <div className={isFavorite ? "favActive" : "favDisabled"}>
            <FontAwesomeIcon icon={faHeart} onClick={handleFavorite} />
          </div>
        </div>
      </div>

      <div className="card__name">
        <p>
          {item.type === "Veg Store" && (
            <img src={vegStoreTag} alt="veg store logo" className="tag" />
          )}
          {item.type === "vegan" && (
            <img src={veganTag} alt="vegan logo" className="tag" />
          )}
        </p>
        <div className="card__name--title">{item.name}</div>
      </div>
      <div className="card__address">
        {address[address.length - 3]}, {address[address.length - 2]}
      </div>
      <div className="card__ratings">{ratingStars(item.rating)}</div>
      <div className="card__description">{item.description}</div>
    </div>
  );
}

export default HomeCard;
