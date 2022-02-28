import "./review.css";
import { useParams } from "react-router-dom";
import restaurantData from "../assets/data/restaurants.json";
import veganTag from "../assets/img/category_vegan.svg";
import vegStoreTag from "../assets/img/category_veg-store.svg";
import ratingStars from "../utils/ratingstars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faStar,
  faPlane,
  faShare,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const Review = () => {
  const { index } = useParams();
  const reviewData = restaurantData[index];
  const address = reviewData.address.split(",");

  return (
    <div className="review">
      <div className="banner">
        <div className="banner__left">
          <h1>{reviewData.name}</h1>
          <div className="row-flex">
            <button className="row-flex">
              <p>
                {reviewData.type === "Veg Store" && (
                  <img src={vegStoreTag} alt="veg store logo" className="tag" />
                )}
                {reviewData.type === "vegan" && (
                  <img src={veganTag} alt="vegan logo" className="tag" />
                )}
              </p>
              {reviewData.type}
            </button>
            <div className="card__ratings">
              {ratingStars(reviewData.rating)}
            </div>
          </div>
        </div>
        <div className="banner__right bigscreen">
          <div>
            <button>Update</button> <FontAwesomeIcon icon={faPen} />
          </div>
          <div>
            <button>Favorite</button> <FontAwesomeIcon icon={faStar} />
          </div>
          <div>
            <button>Trip</button> <FontAwesomeIcon icon={faPlane} />
          </div>
          <div>
            <button>Share</button> <FontAwesomeIcon icon={faShare} />
          </div>
        </div>
      </div>
      <div className="review__main">
        <div className="review__left">
          <div className="review--address flex-row">
            <FontAwesomeIcon icon={faHouse} /> / Europe /{" "}
            {address[address.length - 2]} /
            <span> {address[address.length - 3]}</span>
          </div>
        </div>
        <div className="review__right">right</div>
      </div>
    </div>
  );
};

export default Review;
