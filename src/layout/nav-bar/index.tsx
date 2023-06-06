import React, { FC } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

export interface NavBarProps {
     logo: string;
     logoType: LogoType;
     NavLinks: {
          displayText: string;
          path: string;
     }[];
}

type LogoType = "string" | "logo";

export const Navbar: FC<NavBarProps> = ({ NavLinks, logo, logoType }) => {
     const [navbarOpen, setNavbarOpen] = React.useState(false);
     return (
          <nav className="relative flex flex-wrap items-center justify-between px-2 border-dashed shadow-lg border-indigo-500">
               <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                         <Link
                              className="text-2xl font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase text-gray-100"
                              to="/"
                         >
                              {logoType === "string" && <>{logo}</>}
                              {logoType === "logo" && <img width={75} src={logo} alt="" />}
                         </Link>
                         <button
                              className="text-gray-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                              type="button"
                              onClick={() => setNavbarOpen(!navbarOpen)}
                         >
                              <AiOutlineMenu />
                         </button>
                    </div>
                    <div
                         className={
                              "lg:flex xl:flex-row flex-grow items-center lg:auto xl:w-auto lg:w-auto w-full  justify-center" +
                              (navbarOpen ? " flex" : " hidden")
                         }
                         id="example-navbar-danger"
                    >
                         <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-3 items-center">
                              {NavLinks?.map(({ displayText, path }, i) => (
                                   <li
                                        className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug rounded-md text-gray-900 hover:opacity-75 hover:text-gray-600"
                                        key={i}
                                   >
                                        <Link to={path}>{displayText}</Link>
                                   </li>
                              ))}
                         </ul>
                    </div>
               </div>
          </nav>
     );
};
