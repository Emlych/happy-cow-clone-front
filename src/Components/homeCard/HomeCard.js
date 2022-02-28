import "./homecard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar, faBookmark } from "@fortawesome/free-solid-svg-icons";
import veganTag from "../../assets/img/category_vegan.svg";
import vegStoreTag from "../../assets/img/category_veg-store.svg";
import ratingStars from "../../utils/ratingstars";

function HomeCard({ item, index }) {
  const address = item.address.split(",");

  return (
    <div className="homecard">
      <div>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faBookmark} />
      </div>
      <div>
        <FontAwesomeIcon icon={faHeart} />
      </div>
      {/* Use index so website doesn't have to iterate through whole data to find the object with the review info*/}
      <Link to={{ pathname: `/reviews/${index}` }}>
        <img src={item.thumbnail} alt={item.name} className="card__thumbnail" />
      </Link>
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
