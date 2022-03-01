//Import restaurant data
import restaurantData from "../assets/data/restaurants.json";

//Import components
import SearchHero from "../Components/searchHero/SearchHero";
import HomeCard from "../Components/homeCard/HomeCard";

//Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  //Create a new array made only of restaurants' name and placeId, in order to ease research.
  //Set all the items to lowercase.
  let restaurantArr = [];
  for (let i = 0; i < restaurantData.length; i++) {
    restaurantArr.push({
      placeId: restaurantData[i].placeId,
      name: restaurantData[i].name.toLowerCase(),
    });
  }

  return (
    <div className="home">
      <SearchHero restaurantArr={restaurantArr} />
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
