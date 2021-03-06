import "./homecard.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBookmark,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faStar as emptyStar,
} from "@fortawesome/free-regular-svg-icons";
import veganTag from "../../assets/img/category_vegan.svg";
import vegStoreTag from "../../assets/img/category_veg-store.svg";
import ratingStars from "../../utils/ratingstars";
import restaurantData from "../../assets/data/restaurants.json";

function HomeCard({ item, toggleModal, favorites, handleFavorite, token }) {
  const rating = ratingStars(item.rating).split("");
  const address = item.address.split(",");

  //Check if this restaurant is favorite
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (favorites && token) {
      if (favorites.includes(item.placeId)) {
        setIsFav(true);
      } else {
        setIsFav(false);
      }
    }
  }, [favorites]);

  //Add or remove restaurant from favorite
  const toggleFavorite = () => {
    if (!token) {
      toggleModal();
    } else {
      handleFavorite(isFav, item);
      // setIsFav(!isFav);
    }
  };

  //Get index of restaurant to navigate to the review page
  let indexFav = 0;
  for (let i = 0; i < restaurantData.length; i++) {
    if (restaurantData[i].placeId === item.placeId) indexFav = i;
  }

  return (
    <div className="homecard">
      <div>
        {/* Use index so website doesn't have to iterate through whole data to find the object with the review info*/}
        <Link to={{ pathname: `/reviews/${indexFav}` }}>
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
      <div className="card__ratings">
        {rating.map((item, index) => {
          return (
            <div key={index}>
              {item === "???" && <FontAwesomeIcon icon={faStar} />}
              {item === "???" && <FontAwesomeIcon icon={emptyStar} />}
              {item === "???" && <FontAwesomeIcon icon={faStarHalfStroke} />}
            </div>
          );
        })}
      </div>
      <div className="card__description">{item.description}</div>
    </div>
  );
}

export default HomeCard;
