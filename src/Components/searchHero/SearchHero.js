import React from "react";
import "./searchHero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchHero() {
  return (
    <div className="search-hero">
      <div className="hero-container wave">
        <h2>Find Vegan Restaurants Nearby</h2>
        <form>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for city, region, or zipcode"
          />
          <button type="submit" className="primary ">
            <FontAwesomeIcon icon={faSearch} className="primary" />
          </button>
        </form>
      </div>
      <div>Photo By Rustic Vegan</div>
    </div>
  );
}

export default SearchHero;
