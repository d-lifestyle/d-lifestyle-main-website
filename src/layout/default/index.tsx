import React, { FC, ReactNode, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "../nav-bar";
import { GetAdminContentAction, useAppDispatch, useContentSelector } from "../../redux";

export interface MainLayoutProps {
     children: ReactNode;
     pageTitle: string;
}

export const MainLayout: FC<MainLayoutProps> = ({ children, pageTitle }) => {
     const dispatch = useAppDispatch();
     const content = useContentSelector();
     useEffect(() => {
          window.scrollTo(0, 0);
          (async () => {
               await dispatch(GetAdminContentAction());
          })();
     }, [dispatch]);

     return (
          <div className="">
               <Helmet>
                    <title>{pageTitle} | DLifeStyle</title>
               </Helmet>
               <Navbar
                    logo={content?.data?.aboutInfo?.logo}
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
