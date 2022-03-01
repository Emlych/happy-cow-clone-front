//RAF
// CSS global
// personnaliser marqueur sur maps (rajouter ombre et pin point)
// Condition sur magasin ouvert ou fermé
import "./reviewContent.css";

import HappyCowMarker from "../marker/HappyCowMarker";
import GoogleMapReact from "google-map-react";
//import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faHouse,
  faClock,
  faPhone,
  faLocationDot,
  faLink,
  faPlane,
  faShareNodes,
  faCameraAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {
  faStar as emptyStar,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";

const ReviewContent = ({ reviewData }) => {
  const address = reviewData.address.split(",");

  //description data
  const description = reviewData.description;
  const schedule = description.substring(description.indexOf("Open"));

  //Map
  const apiKey = process.env.REACT_APP_API_KEY;
  return (
    <div className="review">
      <div className="review__bigscreen">
        <div className="review__main">
          <div className="review__left">
            <div className="review--address">
              <FontAwesomeIcon icon={faHouse} /> / Europe /{" "}
              {address[address.length - 2]} /
              <span> {address[address.length - 3]}</span>
            </div>
            <div className="review__infos">
              <div>
                <FontAwesomeIcon icon={faClock} className="icon" />
                <div>
                  <div className="infos--type">OPEN OR CLOSED</div>
                  {schedule}
                </div>
              </div>
              <div>
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <div>
                  <div className="infos--type">CONTACT</div>
                  {reviewData.phone}
                </div>
              </div>
              <div>
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                <div>
                  <div className="infos--type">FIND</div>
                  {address}
                </div>
              </div>
            </div>
            <div className="review__description">{description}</div>
            <div className="review__buttons">
              <div className="buttons">
                <button className="primary">
                  <FontAwesomeIcon icon={faPen} className="icon" />
                  Add Review
                </button>
                <button className="primary">
                  <FontAwesomeIcon icon={faCameraAlt} className="icon" /> Add
                  Photo
                </button>
              </div>
              <div>
                {reviewData.pictures.length} photos{" "}
                <FontAwesomeIcon icon={faCameraAlt} className="icon" />
              </div>
            </div>
            <div className="review__caroussel">
              {reviewData.pictures.map((item, index) => {
                return <img src={item} alt="test" key={index} />;
              })}
            </div>
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
      <div className="review__smallscreen">
        <div className="review--address">
          <FontAwesomeIcon icon={faHouse} /> / Europe /{" "}
          {address[address.length - 2]} /
          <span> {address[address.length - 3]}</span>
        </div>
        <div className="review__infos">
          <div>
            <FontAwesomeIcon icon={faClock} className="icon" />
            <div>
              <div className="infos--type">OPEN OR CLOSED</div>
              {schedule}
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <div>
              <div className="infos--type">CONTACT</div>
              {reviewData.phone}
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <div>
              <div className="infos--type">FIND</div>
              {address}
            </div>
          </div>
        </div>
        <div className="review__description">{description}</div>
        <div className="review__buttons">
          <button className="primary">
            <FontAwesomeIcon icon={faPenToSquare} className="icon" />
            Add Review
          </button>
          <button className="primary">
            <FontAwesomeIcon icon={faCameraAlt} className="icon" /> Add Photo
          </button>
        </div>
        <div className="review__caroussel">
          {reviewData.pictures.map((item, index) => {
            return <img src={item} alt="test" key={index} />;
          })}
        </div>
        <div className="review__addphotos">
          <div>
            <FontAwesomeIcon icon={faCameraAlt} className="icon" />
            View all {reviewData.pictures.length} photos
          </div>
        </div>
        <div className="review__interaction">
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
        <div className="review__map">
          <div className="map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: `${apiKey}` }}
              defaultCenter={{
                lat: reviewData.location.lat,
                lng: reviewData.location.lng,
              }}
              defaultZoom={16}
            >
              <HappyCowMarker
                lat={reviewData.location.lat}
                lng={reviewData.location.lng}
                tagType={reviewData.type}
              />
            </GoogleMapReact>
          </div>
          <div>
            <p>Website</p>
            <nav className="review__links">
              <a
                href={reviewData.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
                <span>{reviewData.website}</span>
              </a>
              <a
                href={reviewData.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} /> <span>Facebook</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewContent;
