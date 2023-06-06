import React, { FC } from "react";
import { Link } from "react-router-dom";

export interface ToursTravelItemProps {
  _id: string
  image: string
  displayName: string
  place: string
  theme: string
  duration: string
}

export const ToursTravelItem: FC<ToursTravelItemProps> = ({ _id, displayName, duration, image, place, theme }) => {
  return (
    <div key={_id} className="col-span-12 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12">
      <div
        className="hover:shadow-xl hover:shadow-gray-400 rounded"
        style={{
          backgroundImage: `url(${image})`,
          height: 200,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Link to={`/tours-travel-details/${_id}`}>
          <div className="bg-gray-900 rounded flex flex-col justify-center items-center bg-opacity-50 text-white h-full w-full p-3">
            <h6 className="text-xl text-center">{displayName}</h6>
            <h6 className="text-gray-300 mt-2">{place}</h6>
            <h6 className="text-gray-300 mt-2">{theme} For {duration}</h6>
          </div>
        </Link>
      </div>
    </div>
  )
}
