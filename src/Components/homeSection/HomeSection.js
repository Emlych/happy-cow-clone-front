import "./homeSection.css";

//Import component
import HomeCard from "../homeCard/HomeCard";

//Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const HomeSection = ({ title, restaurantData }) => {
  return (
    <section>
      <h2>{title}</h2>

      <div className="caroussel">
        {restaurantData.slice(0, 10).map((item, index) => {
          return <HomeCard key={item.placeId} item={item} index={index} />;
        })}
      </div>

      <div>
        View all
        <FontAwesomeIcon icon={faGreaterThan} />
      </div>
    </section>
  );
};

export default HomeSection;
