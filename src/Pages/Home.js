import SearchHero from "../Components/searchHero/SearchHero";
import restaurantData from "../assets/data/restaurants.json";
import HomeCard from "../Components/homeCard/HomeCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="home">
      <SearchHero />
      <section>
        <h2>Vegan Food Near Me</h2>
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
    </div>
  );
};

export default Home;
