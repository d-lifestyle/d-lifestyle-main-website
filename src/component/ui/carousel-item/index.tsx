import React, { FC } from "react";

export interface CarouselItemProps {
     image: string;
     altText: string;
}

export const CarouselItem: FC<CarouselItemProps> = ({ altText, image }) => {
     return (
          <div className="item xl:h-[100vh] lg:h-[100-vh]">
               <img src={image} width="100%" height="100%" alt={altText} className="object-cover" />
          </div>
     );
};
