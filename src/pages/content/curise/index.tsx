import React from "react";
import { MainLayout } from "../../../layout";
import { Link } from "react-router-dom";

export const Cruise = () => {
     return (
          <MainLayout pageTitle="Travel package">
               <nav className="flex container mx-auto my-10" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                         <li className="inline-flex items-center">
                              <Link
                                   to="#"
                                   className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                              >
                                   <svg
                                        aria-hidden="true"
                                        className="w-4 h-4 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                   >
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                   </svg>
                                   Home
                              </Link>
                         </li>
                         <li>
                              <div className="flex items-center">
                                   <span className="text-gray-400">/</span>
                                   <Link
                                        to="#"
                                        className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                   >
                                        List
                                   </Link>
                              </div>
                         </li>
                         <li aria-current="page">
                              <div className="flex items-center">
                                   <span className="text-gray-400">/</span>
                                   <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                                        Cruise
                                   </span>
                              </div>
                         </li>
                    </ol>
               </nav>
               Cruise page
          </MainLayout>
     );
};
