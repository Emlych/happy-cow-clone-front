//RAF
// Condition sur magasin ouvert ou fermé
// CSS global
// personnaliser marqueur sur maps (rajouter ombre et pin point)
// Exporter en composants

import "dotenv/config";

import "./review.css";
import { useParams } from "react-router-dom";
import restaurantData from "../assets/data/restaurants.json";
import veganTag from "../assets/img/category_vegan.svg";
import vegStoreTag from "../assets/img/category_veg-store.svg";
import vegetarian from "../assets/img/category_vegetarian.svg";
import ratingStars from "../utils/ratingstars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faStar,
  faPlane,
  faShare,
  faHouse,
  faClock,
  faPhone,
  faLocationDot,
  faCameraAlt,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import GoogleMapReact from "google-map-react";
import HappyCowMarker from "../Components/marker/HappyCowMarker";

const Review = () => {
  const { index } = useParams();
  const reviewData = restaurantData[index];
  const address = reviewData.address.split(",");

  //description data
  const description = reviewData.description;
  const schedule = description.substring(description.indexOf("Open"));

  const apiKey = process.env.API_KEY;
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
                {reviewData.type === "vegetarian" && (
                  <img src={vegetarian} alt="vegetarian logo" className="tag" />
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
          <div className="review--address">
            <FontAwesomeIcon icon={faHouse} /> / Europe /{" "}
            {address[address.length - 2]} /
            <span> {address[address.length - 3]}</span>
          </div>
          <div className="row-flex">
            <div className="row-flex">
              <FontAwesomeIcon icon={faClock} />
              <div>
                <div>OPEN OR CLOSED</div>
                {schedule}
              </div>
            </div>
            <div className="row-flex">
              <FontAwesomeIcon icon={faPhone} />
              <div>
                <div>CONTACT</div>
                {reviewData.phone}
              </div>
            </div>
            <div className="row-flex">
              <FontAwesomeIcon icon={faLocationDot} />
              <div>
                <div>FIND</div>
                {address}
              </div>
            </div>
          </div>
          <div>{description}</div>
          <div className="space-between-flex">
            <div className="buttons">
              <button className="primary">
                <FontAwesomeIcon icon={faPen} />
                Add Review
              </button>
              <button className="primary">
                <FontAwesomeIcon icon={faCameraAlt} /> Add Photo
              </button>
            </div>
            <div>
              {reviewData.pictures.length} photos{" "}
              <FontAwesomeIcon icon={faCameraAlt} />
            </div>
          </div>
          <div className="review__caroussel">
            {reviewData.pictures.map((item, index) => {
              return <img src={item} alt="test" key={index} />;
            })}
          </div>
          <div>Claim this business</div>
        </div>

        <div className="review__right">
          <div className="map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: `${apiKey}` }}
              defaultCenter={{
                lat: reviewData.location.lat,
                lng: reviewData.location.lng,
              }}
              defaultZoom={15}
            >
              <HappyCowMarker
                lat={reviewData.location.lat}
                lng={reviewData.location.lng}
                tagType={reviewData.type}
              />
            </GoogleMapReact>
          </div>
          <div>
            <div>Website</div>
            <nav className="review__links">
              <a
                href={reviewData.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} /> {reviewData.website}
              </a>
              <a
                href={reviewData.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} /> Facebook
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
