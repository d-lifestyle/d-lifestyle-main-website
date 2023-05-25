import React, { FC, ReactNode, useLayoutEffect } from "react";
import Helmet from "react-helmet";
import { Navbar } from "../navbar";
import { Footer } from "../footer";
import {
     GetAllAccommodation,
     GetAllCarousel,
     GetAllCategory,
     GetAllMainCategory,
     GetAllToursTravel,
     WebContentAction,
} from "../../features/action";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../features";
import { useGeneralSelector } from "../../features/slice";

export interface DefaultLayoutProps {
     children: ReactNode;
     pageTitle: string;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children, pageTitle }) => {
     const dispatch = useDispatch<AppDispatch>();
     const general = useGeneralSelector();

     useLayoutEffect(() => {
          (async () => {
               await dispatch(GetAllCategory());
               await dispatch(GetAllMainCategory());
               await dispatch(GetAllCarousel());
               await dispatch(GetAllAccommodation());
               await dispatch(GetAllToursTravel());
               await dispatch(WebContentAction());
          })();
     }, [dispatch]);
     return (
          <div>
               <Helmet>
                    <title>{pageTitle} | DLifeStyle</title>
               </Helmet>
               <Navbar
                    logoType="logo"
                    logo={general?.content?.aboutInfo?.logo}
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
