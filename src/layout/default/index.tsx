import React, { FC, ReactNode, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "../nav-bar";

export interface MainLayoutProps {
     children: ReactNode;
     pageTitle: string;
}

export const MainLayout: FC<MainLayoutProps> = ({ children, pageTitle }) => {
     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);

     return (
          <div className="">
               <Helmet>
                    <title>{pageTitle} | DLifeStyle</title>
               </Helmet>
               <Navbar
                    logo="https://png.pngtree.com/png-clipart/20220806/ourmid/pngtree-bearded-man-logo-png-image_6100735.png"
                    logoType="logo"
                    NavLinks={[
                         {
                              displayText: "home",
                              path: "/",
                         },
                         {
                              displayText: "contact",
                              path: "/contact",
                         },
                         {
                              displayText: "about us",
                              path: "/about",
                         },
                    ]}
               />
               <main>{children}</main>
          </div>
     );
};
