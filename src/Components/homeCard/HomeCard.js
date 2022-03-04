import "./homecard.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import veganTag from "../../assets/img/category_vegan.svg";
import vegStoreTag from "../../assets/img/category_veg-store.svg";
import ratingStars from "../../utils/ratingstars";
import restaurantData from "../../assets/data/restaurants.json";

//Handle favorites with back
import Cookies from "js-cookie";

function HomeCard({ item, index, toggleModal, favorites, handleFavorite }) {
  const address = item.address.split(",");

  console.log("item in Home Card ==>", item.placeId);

  //Check if this restaurant is favorite
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    console.log("activage useEffect after new favorites?");
    const token = Cookies.get("userToken");
    if (favorites && token) {
      if (favorites.includes(item.placeId)) setIsFav(!isFav);
    }
  }, [favorites]);

  //Add or remove restaurant from favorite
  const toggleFavorite = () => {
    const token = Cookies.get("userToken");
    !token ? toggleModal() : handleFavorite(isFav, item);
  };

  //Get index of restaurant to navigate to the review page
  const indexFav = restaurantData.indexOf(item.placeId);
  console.log("favorite index ==>", indexFav);

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
          <div className={isFav ? "favActive" : "favDisabled"}>
            <FontAwesomeIcon icon={faHeart} onClick={toggleFavorite} />
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
