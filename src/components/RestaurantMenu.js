import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "./config";

const RestaurantMenu = () => {
    //how to read a dynamic url{params}
    const { id } = useParams();

    const [restaurant, setRestaurant] = useState(null);

    const [restaurantMenu, setRestaurantMenu] = useState([]);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7091959&lng=88.41309410000001&restaurantId=" + id)
        const json = await data.json();
        //console.log(json);
        setRestaurant(json?.data?.cards[0]?.card?.card?.info)
        setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    }

    if (!restaurant) {
        return <Shimmer />
    }

    //console.log(restaurantMenu);
    return (
        <div className="menu">
            <div>
                <h1>{"Restaurant id: " + restaurant?.id}</h1>
                <h2>{restaurant?.name}</h2>
                <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
                <h3>{restaurant?.cuisines.join(", ")}</h3>
                <h3>{restaurant?.costForTwoMessage}</h3>
                <h3>{restaurant?.avgRating} stars</h3>
                <h3>{restaurant?.locality}</h3>
                <h3>{restaurant?.city}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>{
                    Object.values(restaurantMenu).map((item) =>
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                    )}</ul>
            </div>
        </div>
    )
}
export default RestaurantMenu;