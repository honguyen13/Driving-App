const trips = [
  {
    id: 1,
    date: "Yesterday",
    score: 7.2,
    distance: "45.6 mi",
    from: "Midtown, San Jose, CA",
    to: "Downtown, San Francisco, CA",
  },
  {
    id: 2,
    date: "Oct 12",
    score: 8.3,
    distance: "837.9 mi",
    from: "Burbank Avenue, San Martin, CA",
    to: "Llagas Avenue, Los Angeles, CA",
  },
  {
    id: 3,
    date: "Dec 21",
    score: 7.5,
    distance: "432.6 mi",
    from: "Burbank Avenue, San Martin, CA",
    to: "Llagas Avenue, Los Angeles, CA",
  },
];

const drivingData = [
  {
    id: 1,
    status: "Bad",
    action: "Breaking",
    icon: require("../assets/images/icons/BreakingBad.png"),
  },
  {
    id: 2,
    status: "Fair",
    action: "Speeding",
    icon: require("../assets/images/icons/SpeedingFair.png"),
  },
  {
    id: 3,
    status: "Good",
    action: "Breaking",
    icon: require("../assets/images/icons/BreakingGood.png"),
  },
];

const location = {
  latitude: 40.73978092263567,
  longitude: -73.87333547273988,
  latitudeDelta: 0.06,
  longitudeDelta: 0.06,
};

export { trips, drivingData, location };
