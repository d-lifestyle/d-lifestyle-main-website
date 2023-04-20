import React, { useEffect } from "react";

import { DefaultLayout } from "../../layout";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { CarouselItem } from "../../component";
import {
     useAccommodationSelector,
     useCarouselSelector,
     useCategorySelector,
     useMainCategorySelector,
     useToursTravelSelector,
} from "../../slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../features";
import {
     GetAllAccommodation,
     GetAllCarousel,
     GetAllCategory,
     GetAllMainCategory,
     GetAllToursTravel,
} from "../../features/action";
import { AccommodationProps, CarouselProps, CategoriesProps, ToursTravelProps } from "../../interface";
import { MdShareLocation } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";

const Months = [
     {
          name: "january",
          image: "https://placehold.co/75",
     },
     {
          name: "february",
          image: "https://placehold.co/75",
     },
     {
          name: "march",
          image: "https://placehold.co/75",
     },
     {
          name: "april",
          image: "https://placehold.co/75",
     },
     {
          name: "may",
          image: "https://placehold.co/75",
     },
     {
          name: "june",
          image: "https://placehold.co/75",
     },
     {
          name: "july",
          image: "https://placehold.co/75",
     },
     {
          name: "august",
          image: "https://placehold.co/75",
     },
     {
          name: "september",
          image: "https://placehold.co/75",
     },

     {
          name: "october",
          image: "https://placehold.co/75",
     },

     {
          name: "november",
          image: "https://placehold.co/75",
     },
     {
          name: "december",
          image: "https://placehold.co/75",
     },
];

export const Home = () => {
     const carousel = useCarouselSelector();
     const categories = useCategorySelector();
     const mainCategories = useMainCategorySelector();
     const accommodation = useAccommodationSelector();
     const toursTravels = useToursTravelSelector();
     const dispatch = useDispatch<AppDispatch>();
     console.log(mainCategories.data);

     useEffect(() => {
          (async () => {
               await dispatch(GetAllCategory());
               await dispatch(GetAllCarousel());
               await dispatch(GetAllMainCategory());
               await dispatch(GetAllAccommodation());
               await dispatch(GetAllToursTravel());
          })();
     }, [dispatch]);
     return (
          <DefaultLayout pageTitle="Best travel agency in India">
               <div className="flex gap-5 justify-center bg-gray-100 py-8 flex-wrap">
                    {categories?.data?.length !== 0 &&
                         categories.data.map(({ name, _id }: CategoriesProps) => (
                              <h6
                                   key={_id}
                                   className="cursor-pointer bg-white px-5 py-2 rounded-md uppercase hover:text-primary-500 text-sm border-2 duration-300 hover:border-primary-500"
                              >
                                   {name}
                              </h6>
                         ))}
               </div>
               <OwlCarousel items={1} autoplay className="owl-theme" loop margin={10} nav>
                    {carousel.data.length &&
                         carousel.data.map(({ dataAlt, dataImage }: CarouselProps, i: number) => (
                              <CarouselItem key={i} image={dataImage} altText={dataAlt} />
                         ))}
               </OwlCarousel>

               <div className="bg-primary-100 rounded-br-full rounded-tl-full py-20 px-5 my-10">
                    <div className="backdrop-blur-xl py-10 bg-opacity-10">
                         <div className="flex justify-between items-center py-10">
                              <h4 className="text-3xl capitalize">accommodations - for your better stay!</h4>
                              <button
                                   type="button"
                                   className="flex gap-3 items-center bg-primary-500 px-5 py-3 uppercase text-white rounded-md"
                              >
                                   view more
                                   <AiOutlineArrowRight />
                              </button>
                         </div>
                         <div className="grid grid-cols-12 gap-8 mt-5 justify-center">
                              {accommodation.data.length !== 0 &&
                                   accommodation.data
                                        .map(({ SubCategory, city, displayName, state, _id }: AccommodationProps) => (
                                             <div
                                                  key={_id}
                                                  className="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12"
                                             >
                                                  <div className="bg-white rounded-md group  border-2 hover:border-opacity-50 hover:border-primary-500 hover:shadow-xl duration-300 cursor-pointer">
                                                       <img
                                                            src="https://images.pexels.com/photos/14613200/pexels-photo-14613200.jpeg"
                                                            alt={displayName}
                                                       />
                                                       <div className="px-3 py-2">
                                                            <h6 className="text-xl capitalize group-hover:text-primary-500 truncate">
                                                                 {displayName}
                                                            </h6>
                                                            <button
                                                                 type="button"
                                                                 className="flex gap-3 items-center my-3"
                                                            >
                                                                 <MdShareLocation />

                                                                 <p className="text-gray-500 uppercase font-semibold">
                                                                      {SubCategory.name} - {SubCategory.CategoryId.name}
                                                                 </p>
                                                            </button>
                                                            <p className="text-gray-500 capitalize">
                                                                 {state}, {city}
                                                            </p>
                                                       </div>
                                                  </div>
                                             </div>
                                        ))
                                        .slice(0, 12)}
                         </div>
                    </div>
               </div>
               <div className="bg-secondary-200 rounded-br-full rounded-tl-full py-20 px-5 my-10">
                    <div className="backdrop-blur-xl py-10 bg-opacity-10">
                         <div className="flex justify-between items-center py-10 backdrop-blur-lg">
                              <h4 className="text-3xl capitalize">tours packages - best travel places to visit</h4>
                              <button
                                   type="button"
                                   className="bg-secondary-500 px-10 py-2 uppercase text-white rounded-md"
                              >
                                   view more
                              </button>
                         </div>
                         <div className="grid grid-cols-12 gap-5 mt-5">
                              {toursTravels.data.length !== 0 &&
                                   toursTravels.data
                                        .map(
                                             ({
                                                  SubCategory,
                                                  displayName,
                                                  place,
                                                  code,
                                                  duration,
                                                  theme,
                                                  _id,
                                             }: ToursTravelProps) => (
                                                  <div
                                                       key={_id}
                                                       className="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12"
                                                  >
                                                       <div className="bg-white rounded-md group border-transparent border-2 hover:border-opacity-50 hover:border-secondary-500 hover:shadow-xl duration-300 cursor-pointer">
                                                            <img
                                                                 src="https://images.pexels.com/photos/14613200/pexels-photo-14613200.jpeg"
                                                                 alt={displayName}
                                                            />
                                                            <div className="px-3 py-2">
                                                                 <h6 className="text-xl capitalize group-hover:text-secondary-500 truncate">
                                                                      {displayName}
                                                                 </h6>
                                                                 <p className="font-semibold">For : {duration}</p>
                                                                 <button
                                                                      type="button"
                                                                      className="flex gap-3 items-center my-3"
                                                                 >
                                                                      <MdShareLocation />

                                                                      <p className="text-gray-500 uppercase font-semibold">
                                                                           {SubCategory.name},{" "}
                                                                           {SubCategory?.CategoryId?.name}
                                                                      </p>
                                                                 </button>
                                                                 <p className="text-gray-500 capitalize">{place}</p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             )
                                        )
                                        .slice(0, 12)}
                         </div>
                    </div>
               </div>

               <div className="bg-secondary-600 my-20 px-20 py-10">
                    <div className="">
                         <h5 className="text-xl uppercase text-center text-white">
                              BEST PLACES TO VISIT IN INDIA BY MONTH
                         </h5>
                         <div className="grid grid-cols-12 mt-10 gap-5">
                              {Months.map(({ image, name }, i) => (
                                   <div
                                        className="col-span-6 xl:col-span-1 md:col-span-4 lg:col-span-1 flex flex-col group hover:shadow-md p-5 rounded-sm duration-300 hover:bg-primary-500 justify-center items-center cursor-pointer"
                                        key={i}
                                   >
                                        <img src={image} className="rounded-full" alt={name} />
                                        <div className="text-sm mt-2 text-gray-300 group-hover:text-white uppercase">
                                             {name}
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
               <div className="mt-20 mb-20 pt-10" id="services">
                    <h6 className="text-2xl uppercase text-gray-900 text-center">explore our services</h6>
                    <div className="flex gap-5 mt-5 justify-center flex-wrap">
                         <h6 className="cursor-pointer uppercase hover:text-primary-500">entertainment</h6>
                         <h6 className="cursor-pointer uppercase hover:text-primary-500">resturent &amp; cafe</h6>
                         <h6 className="cursor-pointer uppercase hover:text-primary-500">health &amp; wellness</h6>
                         <h6 className="cursor-pointer uppercase hover:text-primary-500">shopping</h6>
                         <h6 className="cursor-pointer uppercase hover:text-primary-500">events</h6>
                         <h6 className="cursor-pointer uppercase hover:text-primary-500">personal services</h6>
                         <h6 className="cursor-pointer uppercase hover:text-primary-500">membership</h6>
                    </div>
                    <OwlCarousel items={1} autoplay className="owl-theme mt-10" loop margin={10} nav>
                         {carousel.data.length &&
                              carousel.data.map(({ dataAlt, dataImage }: CarouselProps, i: number) => (
                                   <CarouselItem key={i} image={dataImage} altText={dataAlt} />
                              ))}
                    </OwlCarousel>
               </div>
          </DefaultLayout>
     );
};
