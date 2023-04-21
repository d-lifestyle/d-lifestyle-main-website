import React, { FC, ReactNode, useLayoutEffect } from "react";
import Helmet from "react-helmet";
import { Navbar } from "../navbar";
import { Footer } from "../footer";
import {
     FilterAccommodation,
     FilterToursPackages,
     useAccommodationSelector,
     useCarouselSelector,
     useCategorySelector,
     useMainCategorySelector,
     useToursTravelSelector,
} from "../../slice";
import { AppDispatch } from "../../features";
import { useDispatch } from "react-redux";
import {
     GetAllAccommodation,
     GetAllCarousel,
     GetAllCategory,
     GetAllMainCategory,
     GetAllToursTravel,
} from "../../features/action";

export interface DefaultLayoutProps {
     children: ReactNode;
     pageTitle: string;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children, pageTitle }) => {
     const categories = useCategorySelector();
     const mainCategories = useMainCategorySelector();

     const dispatch = useDispatch<AppDispatch>();
     const getMainCategories = async () => {
          await dispatch(GetAllMainCategory());
     };

     useLayoutEffect(() => {
          (async () => {
               await getMainCategories();
               await dispatch(GetAllCategory());
               await dispatch(GetAllCarousel());
               await dispatch(GetAllAccommodation());
               await dispatch(GetAllToursTravel());
               if (await mainCategories.data) {
                    dispatch(FilterToursPackages(await mainCategories?.data[0]?._id));
                    dispatch(FilterAccommodation(await mainCategories?.data[1]?._id));
               }
               console.log("data", await categories);
          })();
     }, [dispatch]);
     return (
          <div>
               <Helmet>
                    <title>{pageTitle} | DLifeStyle</title>
               </Helmet>
               <Navbar
                    logoType="string"
                    logo="DLifeStyle"
                    NavLinks={[
                         { displayText: "home", path: "/" },
                         { displayText: "services", path: "/#services" },
                         { displayText: "about us", path: "/about-us" },
                         { displayText: "contact us", path: "/contact-us" },
                    ]}
               />
               <main>{children}</main>
               <Footer />
          </div>
     );
};
