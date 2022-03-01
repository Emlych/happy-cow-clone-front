import veganTag from "../../assets/img/category_vegan.svg";
import vegStoreTag from "../../assets/img/category_veg-store.svg";
import vegetarian from "../../assets/img/category_vegetarian.svg";

import "./marker.css";

const HappyCowMarker = ({ tagType }) => {
  return (
    <div>
      {tagType === "Veg Store" && (
        <img src={vegStoreTag} alt="veg store logo" className="marker" />
      )}
      {tagType === "vegan" && (
        <img src={veganTag} alt="vegan logo" className="marker" />
      )}
      {tagType === "vegetarian" && (
        <img src={vegetarian} alt="vegan logo" className="marker" />
      )}
    </div>
  );
};

export default HappyCowMarker;
