import React, { FC } from "react";
import { Link } from "react-router-dom";

interface RentalItemProps {
     image: string;
     _id: string;
     displayName: string;
     location: string;
     options: string;
     peopleNo: string;
}

export const RentalItem: FC<RentalItemProps> = ({ _id, displayName, image, location, options, peopleNo }) => {
     return (
          <div
               className="hover:shadow-xl hover:shadow-gray-400 rounded"
               style={{
                    backgroundImage: `url(${image?.length && image})`,
                    height: 200,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
               }}
          >
               <Link to={`/rental-details/${_id}`}>
                    <div className="bg-gray-900  rounded flex flex-col justify-center items-center bg-opacity-50 text-white h-full w-full p-3">
                         <h6 className="text-xl text-center">{displayName}</h6>
                         <h6 className="text-sm text-center">From {location}</h6>
                         <h6 className="text-gray-300 mt-2">
                              {options} drive - {peopleNo} people are allowed
                         </h6>
                    </div>
               </Link>
          </div>
     );
};
