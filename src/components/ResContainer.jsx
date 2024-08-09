import React from "react";
import { restaurantData } from "../utils/mock_data";
import ResCard from "./ResCard";
import { useState } from "react";

const ResContainer = () => {
  const [topRes, setTopRes] = useState(restaurantData);
  return (
    <div className="res-container">
      <button
        className="top-res"
        onClick={() =>
          setTopRes(topRes.filter((res) => res.info.avgRating >= 4))
        }
      >
        Top Rated
      </button>
      <h1 className="res-head-1">
        Restaurant with online food delivery in Mysore
      </h1>
      {topRes.map((res, index) => {
        return <ResCard key={index} resData={res} />;
      })}
      ;
    </div>
  );
};
export default ResContainer;
