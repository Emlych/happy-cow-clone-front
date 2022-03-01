import "./homeSection.css";

//Import component
import HomeCard from "../homeCard/HomeCard";

//Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const HomeSection = ({ title, restaurantData }) => {
  return (
    <section className="homesection">
      <div className="homesection__smallscreen">
        <h2>{title}</h2>

        <div className="caroussel">
          {restaurantData.slice(0, 10).map((item, index) => {
            return <HomeCard key={item.placeId} item={item} index={index} />;
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
            return <HomeCard key={item.placeId} item={item} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
