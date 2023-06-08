import React, { FC } from "react";
import { Link } from "react-router-dom";

interface CruiseItemProps {
     _id: string;
     image: string;
     displayName: string;
     itinerary: string;
     sailingType: string;
     departure: string;
}

export const CruiseItem: FC<CruiseItemProps> = ({ _id, displayName, image, itinerary, sailingType, departure }) => {
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
               <Link to={`/cruise-details/${_id}`}>
                    <div className="bg-gray-900  rounded flex flex-col justify-center items-center bg-opacity-50 text-white h-full w-full p-3">
                         <h6 className="text-xl text-center">{displayName}</h6>
                         <h6 className="text-sm text-center">{departure}</h6>
                         <h6 className="text-gray-300 mt-2">
                              {itinerary} - {sailingType}
                         </h6>
                    </div>
               </Link>
          </div>
     );
};
