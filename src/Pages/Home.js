//RAF : passer les lat et long en x et y via ArcGis pour moins d'erreurs sur la distance.

//Import restaurant data
import restaurantData from "../assets/data/restaurants.json";

//Import components
import SearchHero from "../Components/searchHero/SearchHero";
import HomeSection from "../Components/homeSection/HomeSection";

//Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

//
import { useState, useEffect } from "react";
import calcDistance from "../utils/calcDistance";

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

  //Get Geolocation of user to load nearest restaurants on page load
  const [location, setLocation] = useState({ lat: 48.3897, long: -4.48333 });
  useEffect(() => {
    const setUserLocation = () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    };
    setUserLocation();
  }, []);

  //Create a new array of num nearest restaurants with placeId and distance keys
  let distanceRestaurant = [];
  const getNearestRestaurant = (num) => {
    for (let i = 0; i < restaurantData.length; i++) {
      distanceRestaurant.push({
        placeId: restaurantData[i].placeId,
        distance: calcDistance(
          location.lat,
          location.long,
          restaurantData[i].location.lat,
          restaurantData[i].location.lng
        ),
      });
    }
    distanceRestaurant.sort((a, b) => {
      return a.distance - b.distance;
    });
    return distanceRestaurant.slice(0, num);
  };

  //Filter restaurantData to pass it in HomeSection component in render
  let nearestRestaurant = getNearestRestaurant(10);
  const filteredRestaurant = restaurantData.filter((element) => {
    return nearestRestaurant.some((item) => {
      return item.placeId === element.placeId;
    });
  });

  return (
    <div className="home">
      <SearchHero restaurantArr={restaurantArr} />
      <HomeSection
        restaurantData={filteredRestaurant}
        title="Vegan Food Near Me"
      />
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
