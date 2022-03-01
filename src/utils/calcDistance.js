const calcDistance = (lat, long, restaurantLat, restaurantLong) => {
  let deltaLat = lat - restaurantLat;
  let deltaLong = long - restaurantLong;
  let distance = Math.sqrt(Math.pow(deltaLat, 2) + Math.pow(deltaLong, 2));
  return distance;
};
export default calcDistance;
