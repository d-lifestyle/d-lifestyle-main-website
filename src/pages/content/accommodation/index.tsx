import React, { useCallback, useEffect } from "react";
import { MainLayout } from "../../../layout";
import {
     ListAccommodationAction,
     ListCategoryAction,
     ListCategoryByIdAction,
     ListSubCategoryByCategoryIdAction,
     useAccommodationSelector,
     useAppDispatch,
     useSubCategorySelector,
} from "../../../redux";
import { AccommodationItem } from "../../../component";
import { Link, useParams } from "react-router-dom";

export const Accommodation = () => {
     const accommodation = useAccommodationSelector();
     const subCategory = useSubCategorySelector();
     const dispatch = useAppDispatch();
     const params = useParams();

     const GetListCategory = useCallback(async () => {
          await dispatch(ListCategoryAction());
          if (params.id) {
               await dispatch(ListSubCategoryByCategoryIdAction(params.id as string));
          }
     }, [dispatch]);

     useEffect(() => {
          (async () => {
               await GetListCategory();
               await dispatch(ListAccommodationAction());
          })();
     }, [dispatch]);

     return (
          <MainLayout pageTitle="accommodation list">
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
                                        Accommodations
                                   </span>
                              </div>
                         </li>
                    </ol>
               </nav>

               <div className="flex gap-3 px-5 flex-wrap">
                    {subCategory.otherData.length > 1 ? (
                         <div className="w-[300px] p-3 shadow-xl border">
                              <h6 className="text-lg uppercase">select filter</h6>
                              <div className="flex flex-col gap-3 mt-5">
                                   {subCategory?.otherData?.map(({ displayName }: any) => (
                                        <div>
                                             <label className="uppercase flex items-center gap-2">
                                                  <input
                                                       type="checkbox"
                                                       className="accent-primary-500 rounded-full h-5 w-5"
                                                  />{" "}
                                                  <span className="text-sm">{displayName}</span>
                                             </label>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    ) : (
                         <div>No Filter Options found!</div>
                    )}
                    <div className="flex-1">
                         {accommodation?.data?.length !== 0 && (
                              <div className="grid grid-cols-12 gap-5">
                                   {accommodation?.data?.map(({ displayName, _id, image, city, state }) => (
                                        <div
                                             key={_id}
                                             className="col-span-12 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12"
                                        >
                                             <AccommodationItem
                                                  _id={_id as string}
                                                  displayName={displayName}
                                                  image={image[0].image}
                                                  place={`${city} ${state}`}
                                             />
                                        </div>
                                   ))}
                              </div>
                         )}
                         {accommodation.data.length === 0 && (
                              <div className="col-span-12 shadow-xl py-5 border">
                                   <h6 className="text-xl text-primary-500 uppercase text-center">
                                        No accommodation found!
                                   </h6>
                              </div>
                         )}
                    </div>
               </div>
          </MainLayout>
     );
};
