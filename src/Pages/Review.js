//Import Components
import Banner from "../Components/review/Banner";
import ReviewContent from "../Components/review/ReviewContent";

//Import Packages and functions
import { useParams } from "react-router-dom";
import restaurantData from "../assets/data/restaurants.json";

const Review = () => {
  const { index } = useParams();
  const reviewData = restaurantData[index];

  return (
    <div className="review">
      <Banner reviewData={reviewData} />
      <ReviewContent reviewData={reviewData} />
    </div>
  );
};

export default Review;
