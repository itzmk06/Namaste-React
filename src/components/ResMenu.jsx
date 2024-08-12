import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CDN_LINK } from "../utils/constants";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";

const ResMenu = () => {
  const { id } = useParams();
  const jsonData = useResMenu(id);

  const [main_info, setMainInfo] = useState({});
  const [res_info, setResInfo] = useState({});
  const [food_info, setFoodInfo] = useState([]);

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

      console.log("Main Info:", main_info);
      console.log("Res Info:", res_info);
    }
  }, [jsonData]);

  return !jsonData || !main_info?.name || !res_info?.title ? (
    <Shimmer />
  ) : (
    <div className="res-menu">
      <div className="res-menu-1">
        <h2>{main_info.name}</h2>
        <img src={CDN_LINK + main_info.cloudinaryImageId} alt={main_info.name} />
      </div>
      <div className="res-menu-2">
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
      <h1 className="menu-title">{res_info.title}</h1>
      <div className="menu-items">
        {res_info.itemCards && Array.isArray(res_info.itemCards) ? (
          res_info.itemCards.map((food_info) => (
            <div className="menu-items" key={food_info.card?.info?.id}>
              <img
                src={CDN_LINK + food_info.card?.info?.imageId}
                alt={food_info.card?.info?.name}
              />
              <div className="food-items">
                <li>
                  <b>{food_info.card?.info?.name}</b>
                </li>
                <li>
                  <b>Price:</b> ₹ {food_info.card?.info?.price / 100}
                </li>
                <li>
                  <b>Average Rating:</b>{" "}
                  {food_info.card?.info?.ratings?.aggregatedRating?.rating}
                </li>
              </div>
            </div>
          ))
        ) : (
          <h2 className="msg">No items found for this restaurant!</h2>
        )}
      </div>
    </div>
  );
};

export default ResMenu;
