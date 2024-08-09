import "remixicon/fonts/remixicon.css";
import { CDN_LINK } from "../utils/constants";

const ResCard = ({ resData }) => {
  const name = resData.info.name;
  const imgId = resData.info.cloudinaryImageId;
  const cost = resData.info.costForTwo;
  const cuisines = resData.info.cuisines.slice(0, 3);
  const rating = resData.info.avgRating;
  const time = resData.info.sla.deliveryTime;
  const locality = resData.info.locality;
  return (
    <div className="res-card">
      <img className="res-img" src={CDN_LINK + imgId}></img>
      <div className="res-card-content">
        <h3 className="res-title">{name}</h3>
        <li>{cost}</li>
        <div className="res-star">
          <i className="ri-star-fill"></i>
          <li>{rating}</li>
          <li>~ {time} min</li>
        </div>
        <li>{cuisines.join(", ")}</li>
        <li>{locality}</li>
      </div>
    </div>
  );
};

export default ResCard;