import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CDN_LINK } from "../utils/constants";
import { useParams } from "react-router-dom";

const ResMenu = () => {
  const [main_info, setMainInfo] = useState([]);
  const [food_info, setFoodInfo] = useState([]);
  const [res_info, setResInfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const { id } = useParams();
  // console.log(id);
  const fetchMenu = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=".concat(
        id
      )
    );
    const jsonData = await apiData.json();
    let main_root = jsonData.data.cards[2].card.card.info;
    setMainInfo(main_root);

    let rec_root =
      jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card
        .card;
    setResInfo(rec_root);

    let rec_menu = rec_root.itemCards[0].card.info;
    setFoodInfo(rec_menu);
  };

  return main_info.length === 0&&res_info.length===0 ? (
    <Shimmer />
  ) : (
    <div className="res-menu">
      <div className="res-menu-1">
        <h2>{main_info.name}</h2>
        <img src={CDN_LINK + main_info.cloudinaryImageId} />
      </div>
      <div className="res-menu-2">
        {/* <h2> */}
        {/* <b>Restaurant Id :</b> {main_info.id} */}
        {/* </h2> */}
        <h2>
          <b>Average Rating : </b>
          {main_info.avgRating}
        </h2>
        <h2>
          <b>Price : </b>
          {main_info.costForTwoMessage}
        </h2>
        <h2>
          <b>Cuisines : </b>
          {main_info.cuisines.join(", ")}
        </h2>
        <h2>
          <b>Area Name : </b>
          {main_info.areaName}
        </h2>
        <h2>
          <b>Location : </b>
          {main_info.locality}
        </h2>
        <h2>
          <b>Delivery Time : </b>
          {main_info.sla.deliveryTime} min
        </h2>
      </div>
      <h1 className="menu-title">{res_info.title}</h1>
      <div className="menu-items">
            {
              res_info.itemCards.map((food_info)=>{
                return<div className="menu-items" key={food_info.card.info.id}>
                <img src={CDN_LINK+food_info.card.info.imageId} />
                <div className="food-items">
                <li><b>{food_info.card.info.name}</b></li>
                {/* <li>{food_info.id}</li> */}
                <li>{food_info.description}</li>
                <li><b>Price:</b> ₹ {food_info.card.info.price/100}</li>
                <li><b>Average Rating:</b> {food_info.card.info.ratings.aggregatedRating.rating}</li>
                </div>
              </div>
              })
            }

      </div>
    </div>
  );
};
export default ResMenu;


