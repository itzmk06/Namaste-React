import React, { useEffect } from "react";
import ResCard from "./ResCard";
import { useState } from "react";
import Shimmer from "./Shimmer";

const ResContainer = () => {
  const [topRes, setTopRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [backup, SetBackup] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      // https://thingproxy.freeboard.io/fetch/
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setTopRes(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    SetBackup(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return topRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-container">
      <button
        className="top-res"
        onClick={() =>
          SetBackup(topRes.filter((res) => res.info.avgRating >= 4.5))
        }
      >
        Top Rated
      </button>
      <div className="search-bar">
        <div className="search1">
          <i className="ri-search-line s-item-1"></i>
          <input
            className="s-input"
            type="text"
            placeholder="Type a command or search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              SetBackup(
                topRes.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .trim()
                    .includes(e.target.value.toLowerCase().trim())
                )
              );
            }}
          />
        </div>
        <div className="search2">
          <i className="ri-windows-fill s-item-2"></i>
          <h5>+K</h5>
        </div>
      </div>
      <h1 className="res-head-1">
        Restaurant with online food delivery in Mysore
      </h1>
      {backup.length === 0 ? (
        <h3>No result found for {searchText}</h3>
      ) : (
        backup.map((res, index) => {
          return <ResCard key={index} resData={res} />;
        })
      )}
    </div>
  );
};
export default ResContainer;