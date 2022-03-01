//RAF
// recherche par ville
// erreur d'une lettre dans le nom autorisée

import "./searchHero.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

//autocomplete material ui package
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function SearchHero({ restaurantArr }) {
  //Search for restaurants and redirect to the restaurant page
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const submitSearch = () => {
    const index = restaurantArr.findIndex((item) => item.name === search);
    if (index !== -1) {
      navigate(`/reviews/${index}`);
    } else {
      alert("Sorry, no results found for this restaurant.");
    }
  };
  return (
    <div className="search-hero">
      <div className="hero-container wave">
        <h2>Find Vegan Restaurants Nearby</h2>
        <form onSubmit={submitSearch}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={restaurantArr}
            sx={{ width: 300 }}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            onChange={(event, value) => setSearch(value.name)}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField {...params} label="Search for a restaurant name." />
            )}
            renderOption={(props, option) => {
              return (
                <li {...props} key={option.placeId}>
                  {option.name}
                </li>
              );
            }}
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
