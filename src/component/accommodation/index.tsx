import React, { FC } from "react";
import { Link } from "react-router-dom";

export interface AccommodationItemProps {
  image: string;
  _id: string;
  displayName: string;
  place: string;
}

export const AccommodationItem: FC<AccommodationItemProps> = ({ _id, displayName, image, place }) => {
  return (
    <div
      className="hover:shadow-xl hover:shadow-gray-400 rounded"
      style={{
        backgroundImage: `url(${image})`,
        height: 200,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Link to={`/accommodation-details/${_id}`}>
        <div className="bg-gray-900  rounded flex flex-col justify-center items-center bg-opacity-50 text-white h-full w-full p-3">
          <h6 className="text-xl text-center">{displayName}</h6>
          <h6 className="text-gray-300 mt-2">{place}</h6>
        </div>
      </Link>
    </div>
  );
};
