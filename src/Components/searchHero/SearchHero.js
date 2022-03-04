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
import { styled } from "@mui/material/styles";

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

  const StyledTextField = styled(TextField)({
    "& label, & label.Mui-focused": {
      color: "rgb(172 172 172)",
      fontSize: 18,
    },
  });

  return (
    <div className="wave">
      <div className="hero__container">
        <h2>Find Vegan Restaurants Nearby</h2>
        <form onSubmit={submitSearch} className="searchbar">
          <Autocomplete
            className="autocomplete"
            disablePortal
            id="combo-box-search"
            options={restaurantArr}
            sx={{
              width: "95%",
              "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
                transform: "translate(24px, 20px) scale(1);",
              },
              "& .MuiAutocomplete-inputRoot": {
                color: "purple",
                fontSize: 20,
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "#7c4ec4",
                },
              },
            }}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            onChange={(event, value) => setSearch(value.name)}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <StyledTextField
                {...params}
                label="Search for a restaurant name."
              />
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
            <FontAwesomeIcon icon={faSearch} className="primary search-icon" />
          </button>
        </form>
      </div>
      <div className="hero__comment">Photo Not By Rustic Vegan</div>
      <div className="container">
        <svg viewBox="0 70 500 60" preserveAspectRatio="none">
          <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default SearchHero;
