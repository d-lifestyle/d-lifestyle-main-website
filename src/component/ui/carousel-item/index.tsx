import React, { FC } from "react";

export interface CarouselItemProps {
     image: string;
     altText: string;
}

export const CarouselItem: FC<CarouselItemProps> = ({ altText, image }) => {
     return (
          <div className="item xl:h-[60vh] lg:h-[60-vh]">
               <img src={image} width="100%" height="100%" alt={altText} className="object-cover" />
          </div>
     );
};
