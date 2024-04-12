import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import 'animate.css';

const EstateCard = ({ estate }) => {
  const { estate_title, price, Status, location, Area, image, id } = estate;
  return (
    <div>
      <div className="card w-full bg-base-100 rounded-none border shadow-none">
        <figure>
          <img
            className="animate__animated hover:animate__zoomIn animate__duration-900 animate__delay-900"
            src={image}
            alt={estate_title}
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center">
            <p className="text-[#0077be] font-medium">{price}</p>
            <button className="btn rounded-none btn-sm">For {Status}</button>
          </div>
          <h2 className="card-title">{estate_title}</h2>
          <p className="flex items-center gap-1"><CiLocationOn /> {location}</p>
          <p className="flex items-center gap-1">Area: {Area}</p>
          <div className="card-actions justify-end">
            <Link to={`/EstateDetails/${id}`} className="btn rounded-none btn-md bg-[#0077be] text-white hover:text-black">View Property</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
