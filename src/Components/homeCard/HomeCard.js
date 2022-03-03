import "./homecard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import veganTag from "../../assets/img/category_vegan.svg";
import vegStoreTag from "../../assets/img/category_veg-store.svg";
import ratingStars from "../../utils/ratingstars";

function HomeCard({ item, index }) {
  const address = item.address.split(",");
  const [isFavorite, setIsFavorite] = useState(false);
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
          <div>
            <FontAwesomeIcon
              icon={faHeart}
              onClick={() => setIsFavorite(!isFavorite)}
              className={isFavorite ? "favActive" : "favDisabled"}
            />
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
