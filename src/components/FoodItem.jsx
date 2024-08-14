import ItemList from "./ItemList";

const FoodItem = (props) => {

  return (
    <div className="flex flex-col gap-2 mt-1 px-5">
      {props.data.itemCards.map((food,index) => {
        return (
          <ItemList key={index} food={food}/>
        );
      })}
    </div>
  );
};

export default FoodItem;
