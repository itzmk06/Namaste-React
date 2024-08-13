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
  },[]);


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
      <div className="flex justify-center items-center">
      <button
        className="top-res bg-zinc-600 text-zinc-100 m-3 px-3 py-2 rounded-lg"
        onClick={() =>
          SetBackup(topRes.filter((res) => res.info.avgRating >= 4.5))
        }
      >
        Top Rated
      </button>
      <div className="search-bar bg-zinc-300 flex  w-[33rem] rounded-md text-zinc-800">
        <div className="search1 flex  w-[30rem] justify-center items-center">
          <i className="ml-3 ri-search-line s-item-1 text-zinc-600 font-semibold text-xl"></i>
          <input
            className="s-input w-[27rem] py-2 mx-2 outline-none bg-zinc-300"
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
        <div className="search2 flex justify-end mr-4 items-center text-zinc-600">
          <i className="ri-windows-fill s-item-2"></i>
          <h5>+K</h5>
        </div>
      </div>
      </div>
      <h1 className="res-head-1 text-center text-xl">
        Restaurant with online food delivery in Mysore
      </h1>
      {backup.length === 0 ? (
        <h3 className="text-xl translate-x-1/3">No result found for {searchText}</h3>
      ) : (
          <div className="grid grid-cols-4 gap-2  mt-2">
            {    
        backup.map((res, index) => {
          return(
              <ResCard key={index} resData={res} />
          )
        })
            }
          </div>
      )}
    </div>
  );
};
export default ResContainer;