import React, { useEffect } from "react";
import { DefaultLayout } from "../../../layout";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../features";
import { useAccommodationSelector, useToursTravelSelector } from "../../../slice";
import { GetAccommodationById } from "../../../features/action";

export const AccommodationDetails = () => {
     const params = useParams();
     const dispatch = useDispatch<AppDispatch>();
     const accommodation = useAccommodationSelector();
     useEffect(() => {
          (async () => {
               if (params.id) {
                    const data = await dispatch(GetAccommodationById(params.id));
                    if (data.type === "accommodation/by-id/rejected") {
                         <Navigate to="/" replace />;
                    }
               } else {
                    <Navigate to="/" replace />;
               }
          })();
     }, []);

     return (
          <DefaultLayout pageTitle="Best travel agency in India">
               accommodation details{" "}
               {accommodation.single?.image.map(({ image, title }) => (
                    <img src={image} alt={title} />
               ))}
          </DefaultLayout>
     );
};
