import React, { FC } from "react";

export interface CarouselProps {
     dataImage: string;
     dataAlt: string;
     _id: string;
}

export const Carousel: FC<CarouselProps> = ({ dataAlt, dataImage, _id }) => {
     return (
          <div className="relative item xl:h-[80vh] lg:h-[80-vh]" key={_id}>
               <img src={dataImage} width="100%" height="100%" alt={dataAlt} className="object-cover z-0" />
               <h6
                    className="absolute
         z-50 bg-gray-900 text-white px-20 py-5 rounded bg-opacity-90 shadow-xl shadow-primary-500 right-20 bottom-28 uppercase"
               >
                    {dataAlt}
               </h6>
          </div>
     );
};
