//Import restaurant data
import restaurantData from "../assets/data/restaurants.json";

//Import components
import SearchHero from "../Components/searchHero/SearchHero";
import HomeSection from "../Components/homeSection/HomeSection";

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
      <HomeSection restaurantData={restaurantData} title="Vegan Food Near Me" />
      <HomeSection
        restaurantData={restaurantData}
        title="10 Best Vegan Restaurants in Paris, France"
      />

      <section>
        <h2>Top Vegan Friendly Cities</h2>
        <div>
          View all
          <FontAwesomeIcon icon={faGreaterThan} />
        </div>
      </section>
    </div>
  );
};

export default Home;
