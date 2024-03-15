import { useEffect, useState } from "react"; // name import
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

//filtering data for search text -> for example if KFC is search then we will filter out KFC from the resutaurantList if present and return it
filterData = (searchText, restaurants) => {
  return restaurants.filter((restaurant) => restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()))
}

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
    console.log("render()")
  }, []);

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    //optional chaining  
    setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  //console.log(restaurants);

  //conditional rendering
  //if restaurant is empty => shimmer ui
  //if restaurant has data => actual data UI



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
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
