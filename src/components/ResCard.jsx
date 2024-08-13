import "remixicon/fonts/remixicon.css";
import { CDN_LINK } from "../utils/constants";
import {Link} from "react-router-dom"

const ResCard = ({ resData }) => {
  const name = resData.info.name;
  const imgId = resData.info.cloudinaryImageId;
  const cost = resData.info.costForTwo;
  const cuisines = resData.info.cuisines.slice(0, 3);
  const rating = resData.info.avgRating;
  const time = resData.info.sla.deliveryTime;
  const locality = resData.info.locality;
  const id = resData.info.id;
  return (
    <div className="res-card h-[23rem]  bg-zinc-300 w-[19rem] justify-center items-center px-2 py-2 rounded-xl my-2 mx-4 ">
      <Link to={"/restaurant/"+id}>
      <img className="res-img w-[18rem] h-52 rounded-xl object-cover object-center" src={CDN_LINK + imgId}></img>
      <div className="res-card-content flex flex-col font-light">
        <h3 className="res-title font-bold text-lg">{name}</h3>
        <li className="font-semibold">{cost}</li>
        <div className="res-star flex gap-2 font-medium">
          <i className="ri-star-fill text-yellow-500"></i>
          <li>{rating}</li>
          <li>~ {time} min</li>
        </div>
        <li>{cuisines.join(", ")}</li>
        <li>{locality}</li>
      </div>
      </Link>
    </div>
  );
};

export default ResCard;