import React, { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import ReactOwlCarousel from "react-owl-carousel";
import { Link, useParams } from "react-router-dom";
import { Carousel } from "../../../component";
import { MainLayout } from "../../../layout";
import { ListToursPackageByIdAction, useAppDispatch, useTourPackageSelector } from "../../../redux";

export const ToursTravelDetails = () => {
     const toursTravel = useTourPackageSelector();
     const params = useParams();
     const dispatch = useAppDispatch();
     useEffect(() => {
          (async () => {
               await dispatch(ListToursPackageByIdAction(params.id as string));
          })();
     }, [dispatch, params]);
     return (
          <MainLayout pageTitle={`${toursTravel?.single?.displayName} Tours & Travel Details`}>
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
                         <li>
                              <div className="flex items-center">
                                   <span className="text-gray-400">/</span>
                                   <Link
                                        to="#"
                                        className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                   >
                                        Tours Packages
                                   </Link>
                              </div>
                         </li>
                         <li>
                              <div className="flex items-center">
                                   <span className="text-gray-400">/</span>
                                   <Link
                                        to="#"
                                        className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                   >
                                        {toursTravel.single.displayName}
                                   </Link>
                              </div>
                         </li>
                    </ol>
               </nav>
               {toursTravel.single?.image?.length > 1 ? (
                    <div className="container mx-auto">
                         <ReactOwlCarousel items={1} autoplay className="owl-theme" loop margin={10} nav>
                              {toursTravel.single.image?.map(({ image, title }, i) => (
                                   <Carousel dataAlt={title} key={title} _id={JSON.stringify(i)} dataImage={image} />
                              ))}
                         </ReactOwlCarousel>
                    </div>
               ) : (
                    <div className="col-span-12">
                         <h6 className="text-xl text-primary-500 uppercase text-center">No images found!</h6>
                    </div>
               )}
               <div className="container mx-auto my-10">
                    <div className="my-5">
                         <h6 className="text-2xl capitailize font-semibold">
                              {toursTravel.single.displayName} - {toursTravel?.single?.SubCategory?.displayName}
                         </h6>
                         <div className="flex gap-2 mt-2 text-gray-500 items-center">
                              <IoLocationOutline size={20} className="stroke-primary-500" />
                              <h6 className="text-md capitalize">{toursTravel.single.place}</h6>
                         </div>
                         <h6 className="text-xl capitailize mt-5">
                              {toursTravel.single.duration} for {toursTravel?.single?.theme}
                         </h6>
                    </div>
                    <div className="h-auto flex gap-5">
                         <div className="flex-1">
                              More Information :
                              <p
                                   className="text-gray-500 mt-5 h-auto"
                                   dangerouslySetInnerHTML={{ __html: toursTravel.single.description }}
                              />
                         </div>
                    </div>
               </div>
          </MainLayout>
     );
};
