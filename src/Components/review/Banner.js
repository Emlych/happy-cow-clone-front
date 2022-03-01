import "./banner.css";
import ratingStars from "../../utils/ratingstars";

//Import pictures
import veganTag from "../../assets/img/category_vegan.svg";
import vegStoreTag from "../../assets/img/category_veg-store.svg";
import vegetarian from "../../assets/img/category_vegetarian.svg";

//import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faPlane,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as emptyStar,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";

const Banner = ({ reviewData }) => {
  const rating = ratingStars(reviewData.rating).split("");

  return (
    <div className="banner">
      <div className="banner__left">
        <h1>{reviewData.name}</h1>
        <div className="banner__left--container">
          <button>
            <p>
              {reviewData.type === "Veg Store" && (
                <img src={vegStoreTag} alt="veg store logo" className="tag" />
              )}
              {reviewData.type === "vegan" && (
                <img src={veganTag} alt="vegan logo" className="tag" />
              )}
              {reviewData.type === "vegetarian" && (
                <img src={vegetarian} alt="vegetarian logo" className="tag" />
              )}
            </p>
            {reviewData.type}
          </button>
          <div className="card__ratings">
            {rating.map((item, index) => {
              return (
                <div key={index}>
                  {item === "★" && <FontAwesomeIcon icon={faStar} />}
                  {item === "☆" && <FontAwesomeIcon icon={emptyStar} />}
                  {item === "✪" && <FontAwesomeIcon icon={faStarHalfStroke} />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="banner__right--bigscreen">
        <button>
          <FontAwesomeIcon icon={faPenToSquare} className="icon" /> Update
        </button>
        <button>
          <FontAwesomeIcon icon={emptyStar} className="icon" />
          Favorite
        </button>
        <button>
          <FontAwesomeIcon icon={faPlane} className="icon" />
          Trip
        </button>
        <button>
          <FontAwesomeIcon icon={faShareNodes} className="icon" />
          Share
        </button>
      </div>
    </div>
  );
};

export default Banner;
