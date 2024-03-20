import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { FETCH_MENU_URL, IMG_CDN_URL } from "./config";

const RestaurantMenu = () => {
    //how to read a dynamic url{params}
    const { id } = useParams();

    //const restaurant = useRestaurant(id);

    //const [restaurant, setRestaurant] = useState(null);

    //const [restaurantMenu, setRestaurantMenu] = useState([]);

    const [restaurant, setRestaurant] = useState(null);
    const [restaurantMenu, setRestaurantMenu] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(FETCH_MENU_URL + id)
        const json = await data.json();
        //console.log(json);
        setRestaurant(json?.data?.cards[0]?.card?.card?.info)
        setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    }



    console.log(restaurant);

    if (!restaurant) {
        return <Shimmer />
    }

    //console.log(restaurantMenu);
    return (
        <div className="flex">
            <div className="p-2 m-2 shadow-sm">
                <h2 className="font-bold">{"Restaurant id: " + restaurant?.id}</h2>
                <h2 className="font-bold text-xl">{restaurant?.name}</h2>
                <img className="max-w-96 p-2 m-2 shadow-lg bg-pink-50" src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
                <h3>{restaurant?.cuisines}</h3>
                <h3>{restaurant?.costForTwoMessage}</h3>
                <h3>{restaurant?.avgRating} stars</h3>
                <h3>{restaurant?.locality}</h3>
                <h3>{restaurant?.city}</h3>
            </div>
            <div className="p-3 m-3 shadow-sm">
                <h1>Menu</h1>
                <ul className="list-disc">{
                    Object.values(restaurantMenu).map((item) =>
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                    )}</ul>
            </div>
        </div>
    )
}
export default RestaurantMenu;