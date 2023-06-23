import React, { useCallback, useEffect, useState } from "react";
import { MainLayout } from "../../../layout";
import {
     ListAccommodationAction,
     ListAccommodationBySubCategoryAction,
     ListCategoryAction,
     ListCategoryByIdAction,
     ListSubCategoryByCategoryIdAction,
     useAccommodationSelector,
     useAppDispatch,
     useSubCategorySelector,
} from "../../../redux";
import { AccommodationItem } from "../../../component";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Pagination } from "../../../component/default/pagination";

export const Accommodation = () => {
     const accommodation = useAccommodationSelector();
     const subCategory = useSubCategorySelector();
     const dispatch = useAppDispatch();
     const params = useParams();
     const navigate = useNavigate();
     const [filter, setFilter] = useState<any>();

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

     const handleFilter = async (e: string) => {
          if (e.length) {
               setFilter(e);
               await dispatch(ListAccommodationBySubCategoryAction(filter));
          } else {
               setFilter("");
               await dispatch(ListAccommodationAction());
          }
     };

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

               <div className="grid grid-cols-5 divide-x-2 gap-5 px-5 h-[70vh]">
                    <div className="col-span-3 xl:col-span-1 py-10 border shadow-xl px-5 lg:col-span-1 md:col-span-1 sm:col-span-3 xs:col-span-1">
                         {subCategory.data.length > 0 && (
                              <div>
                                   <h6 className="mb-3 uppercase">select filter</h6>
                                   <ul>
                                        {subCategory.otherData.map(({ displayName, _id }: any) => (
                                             <li key={_id}>
                                                  <label htmlFor={displayName} className="flex items-center">
                                                       <input
                                                            id={displayName}
                                                            type="checkbox"
                                                            value={filter}
                                                            checked={filter === _id}
                                                            onChange={() => handleFilter(_id)}
                                                            name={_id}
                                                            className="accent-primary-500 rounded-full h-4 w-4"
                                                       />
                                                       <span className="ml-2 capitalize">{displayName}</span>
                                                  </label>
                                             </li>
                                        ))}
                                   </ul>
                              </div>
                         )}
                    </div>
                    <div className="py-10 px-5 col-span-3 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-3 xs:col-span-1">
                         <h6 className="mb-3 text-ls uppercase">Accommodations</h6>
                         <div className="overflow-y-scroll h-full py-3">
                              {accommodation.data.length > 0 && (
                                   <div className="flex flex-col gap-10">
                                        {accommodation.data.map(
                                             ({ SubCategory, city, description, displayName, image, state, _id }) => (
                                                  <div className="flex flex-col bg-white border border-gray-200 shadow-xl md:flex-row hover:bg-gray-100  h-[200px] dark:hover:bg-gray-100 w-full justify-between group space-between">
                                                       <div className="flex gap-3 items-center">
                                                            <img
                                                                 className="object-cover w-full h-full md:w-48 "
                                                                 src={image[0].image}
                                                                 alt={image[0].title}
                                                            />
                                                            <div className="flex flex-col p-4 leading-normal">
                                                                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-primary-500">
                                                                      {displayName}
                                                                 </h5>
                                                                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                                      {city}, {state}
                                                                 </p>
                                                                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                                      Best for {SubCategory.displayName}
                                                                 </p>
                                                            </div>
                                                       </div>
                                                       <div className="px-10 py-5 flex items-center">
                                                            <button
                                                                 type="button"
                                                                 onClick={() =>
                                                                      navigate(`/accommodation-details/${_id}`)
                                                                 }
                                                                 className="bg-primary-500 px-5 py-3"
                                                            >
                                                                 <span className="text-white text-sm uppercase">
                                                                      View details
                                                                 </span>
                                                            </button>
                                                       </div>
                                                  </div>
                                             )
                                        )}
                                   </div>
                              )}
                         </div>
                    </div>
               </div>
          </MainLayout>
     );
};
