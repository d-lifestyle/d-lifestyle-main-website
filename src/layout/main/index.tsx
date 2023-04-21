import React, { FC, ReactNode, useLayoutEffect } from "react";
import Helmet from "react-helmet";
import { Navbar } from "../navbar";
import { Footer } from "../footer";


export interface DefaultLayoutProps {
     children: ReactNode;
     pageTitle: string;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children, pageTitle }) => {
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
