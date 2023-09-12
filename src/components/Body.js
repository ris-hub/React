import { useState } from "react";
import { restrautList } from "./config";
import RestrauntCard from "./RestaurantCard";

filterData = (searchText, restaurants) =>{
  return restaurants.filter((restaurant) =>  restaurant.data.name.includes(searchText))
}

const Body = () => {

//searchText is a local state variable
//const stest = "hello"; js variable declaration
//below is local state variable declaration
const[restaurants, setRestaurants] = useState(restrautList);

const[searchText, setSearchText] = useState("");//to create state variable

//const [searchClicked, setSearchClicked] = useState("false");

  return (
    <>
      <div className="search-container">
        <input 
          type="text" 
          className="search-input" 
          pl aceholder="Search" 
          value={searchText}
          onChange={(e) => {
            //e.target.value
            setSearchText(e.target.value);
          }}
          />
          <button 
            className="search-btn"
            onClick={() =>{
              //need to filter the data
              const data = filterData(searchText, restaurants);
              //update the state - restaurants
              setRestaurants(data);
            }}

            >
              Search</button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
