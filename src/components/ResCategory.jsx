import FoodItem from "./FoodItem";
import { useState } from "react";

const ResCategory = ({item}) => {
    const [show_info,setShowInfo]=useState(false);
  return (
    <div >
    <div
      onClick={() => {
        setShowInfo(!show_info);
      }}
      className="flex justify-between bg-zinc-300 h-10 p-5 rounded-lg items-center gap-5 cursor-pointer mt-3"
    >
      <h1 className="text-xl font-semibold">{item.card.card.title }</h1>
      <h1>
        <i className="ri-arrow-down-s-line text-xl font-semibold"></i>
      </h1>
    </div>
    <div>{show_info ? <FoodItem data={item.card.card} /> : ""}</div>
  </div>
  )

};

export default ResCategory;