import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CDN_LINK } from "../utils/constants";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import "remixicon/fonts/remixicon.css";
import ResCategory from "./ResCategory";

const ResMenu = () => {
  const { id } = useParams();
  const jsonData = useResMenu(id);

  const [show_info,setShowInfo]=useState(false);
  const [main_info, setMainInfo] = useState({});
  const [res_info, setResInfo] = useState({});
  const [food_info, setFoodInfo] = useState([]);
  const [item_info,setItemInfo]=useState([]);


  useEffect(() => {
    if (jsonData) {
      const main_root = jsonData?.data?.cards[2]?.card?.card?.info || {};
      setMainInfo(main_root);

      const rec_root =
        jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card || {};
      setResInfo(rec_root);

      const rec_menu = rec_root?.itemCards?.[0]?.card?.info || [];
      setFoodInfo(rec_menu);

      const data=jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((category)=>category?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
      setItemInfo(data);

    }
  }, [jsonData]);

  return !jsonData || !main_info?.name || !res_info?.title ? (
    <Shimmer />
  ) : (
    <div className="res-menu text-zinc-800 p-1 w-[78%] flex flex-col translate-x-[15%] mb-5">
      <div className="flex mb-5 ">
      <div className="res-menu-1 ">
        <h2 className="text-2xl  my-5 font-semibold">{main_info.name}</h2>
        <img className="p-1 bg-zinc-300 w-80 h-64 object-cover object-center rounded-lg mx-10" src={CDN_LINK + main_info.cloudinaryImageId} alt={main_info.name} />
      </div>
      <div className="res-menu-2 h-60   w-[35rem] text-xl flex flex-col gap-3 rounded-lg px-5 py-2 mt-20 bg-zinc-300">
        <h2>
          <b>Average Rating: </b>
          {main_info.avgRating}
        </h2>
        <h2>
          <b>Price: </b>
          {main_info.costForTwoMessage}
        </h2>
        <h2>
          <b>Cuisines: </b>
          {main_info.cuisines?.join(", ")}
        </h2>
        <h2>
          <b>Area Name: </b>
          {main_info.areaName}
        </h2>
        <h2>
          <b>Location: </b>
          {main_info.locality}
        </h2>
        <h2>
          <b>Delivery Time: </b>
          {main_info.sla?.deliveryTime} min
        </h2>
      </div>
      </div>
      {
        item_info.map((item)=>{
          return  <ResCategory item={item} show_info={false}/>
        })
      }

    </div>
  );
};

export default ResMenu;
