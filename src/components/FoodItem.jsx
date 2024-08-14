import { CDN_LINK } from "../utils/constants";

const FoodItem = (props) => {
  return (
    <div className="flex flex-col gap-2 mt-1 px-5">
      {props.data.itemCards.map((food) => {
       return <div className="border-zinc-300 border-b-2 h-72 flex justify-around items-center mt-3 p-1" key={food.card.info.id}>
          <div>
            <img className=" w-60 h-52 object-cover object-center rounded-lg bg-zinc-300 p-1" src={CDN_LINK + food.card.info.imageId}></img>
          </div>
          <div className="ml-6 w-8/12 flex flex-col gap-2 justify-start items-start">
            <li className="text-lg font-semibold">{food.card.info.name}</li>
            <li className="text-lg font-medium">₹ {food.card.info.price?Math.floor(food.card.info.price/100):food.card.info.defaultPrice}</li>
            <li className="text-lg pr-4">{food.card.info.description}</li>
            <li>⭐{food.card.info.ratings.aggregatedRating.rating}</li>
          </div>
          <div className="flex flex-row justify-between items-start mt-[-9rem]">
          <button className="m-auto bg-zinc-700  px-3  my-[-2rem]    py-1 text-zinc-200 font-semibold rounded-lg ">Add</button>
          <button className="m-auto bg-zinc-700  px-3  my-[-2rem]  mx-2 py-1 text-zinc-200 font-semibold rounded-lg ">Remove</button>
            
            </div>
          {/* console.log(food.card.info.isVeg) */}
        </div>;
      })}
    </div>
  );
};

export default FoodItem;
