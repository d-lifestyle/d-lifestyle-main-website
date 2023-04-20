import React, { FC } from "react";

export interface CarouselItemProps {
     image: string;
     altText: string;
}

export const CarouselItem: FC<CarouselItemProps> = ({ altText, image }) => {
     return (
          <div className="item xl:h-[80vh] lg:h-[80-vh]">
               <img src={image} alt={altText} className="xl:object-fill" />
          </div>
     );
};
