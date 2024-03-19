import { useEffect, useState } from "react"; // name import
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";



const Body = () => {

  //searchText is a local state variable
  //const stest = "hello"; js variable declaration
  //below is local state variable declaration
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");//to create state variable

  //const [searchClicked, setSearchClicked] = useState("false");

  //empty dependency array => called once after render
  //dependency array [searchText] => once after initial render + everytime after searchText changes
  useEffect(() => {
    //here we can make an api call
    getRestaurants();
    //console.log("render()")
  }, []);

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    //console.log(json);
    //optional chaining  
    setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  //console.log(restaurants);

  //conditional rendering
  //if restaurant is empty => shimmer ui
  //if restaurant has data => actual data UI
  const isOnline = useOnline();

  //early return
  if (!isOnline) {
    return <h1>🔴Offline, please check your internet connection!</h1>
  }


  return (filteredRestaurants.length === 0) ? <Shimmer /> : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            //e.target.value
            setSearchText(e.target.value); // synthetic event(this is required in order to change the text value with the text which user has provided)
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            //update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search</button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
