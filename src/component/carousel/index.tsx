import React, { FC } from "react";

export interface CarouselProps {
     dataImage: string;
     dataAlt: string;
     _id: string;
}

export const Carousel: FC<CarouselProps> = ({ dataAlt, dataImage, _id }) => {
     return (
          <div className="relative item" key={_id}>
               <div
                    style={{
                         backgroundImage: `url(${dataImage})`,
                         backgroundPosition: "center",
                         backgroundSize: "cover",
                         height: "80vh",
                    }}
               >
                    <h6
                         className="absolute
         z-50 bg-gray-900 text-white px-20 py-5 rounded bg-opacity-90 shadow-xl shadow-primary-500 right-10 bottom-10 uppercase"
                    >
                         {dataAlt}
                    </h6>
               </div>
          </div>
     );
};
