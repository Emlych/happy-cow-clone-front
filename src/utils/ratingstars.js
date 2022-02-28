const ratingStars = (num) => {
  let rating = "";
  const isDecimal = !Number.isInteger(num);
  const flooredNum = Math.floor(num);
  for (let i = 1; i <= 5; i++) {
    if (num >= i) rating += "★";
    if (num < i && rating.length < 5) rating += "☆";
    if (flooredNum === i && isDecimal) rating += "✪";
  }
  return rating;
};

export default ratingStars;
