import { IMG_CDN_URL } from "./config";

const FoodItem = ({
  name,
  imageId,
  price,
}) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + imageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>Price: Rs.{price / 100}</h3>
    </div>
  );
};
export default FoodItem;