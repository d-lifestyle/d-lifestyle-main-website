import React, { useEffect } from "react";
import { MainLayout } from "../../layout";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useDispatch } from "react-redux";
import {
     AppDispatch,
     ListAccommodationAction,
     ListCategoryAction,
     ListCruiseAction,
     ListRentalAction,
     ListSubCategoryAction,
     ListToursPackageAction,
     useAccommodationSelector,
     useCarouselSelector,
     useCategorySelector,
     useCruiseSelector,
     useRentalSelector,
     useTourPackageSelector,
} from "../../redux";
import { ListCarouselAction } from "../../redux/action/carousel.action";
import { AccommodationItem, Carousel, TitleItem, ToursTravelItem } from "../../component";
import { Link } from "react-router-dom";

export const Home = () => {
     const dispatch = useDispatch<AppDispatch>();

     // selectors
     const accommodation = useAccommodationSelector();
     const toursPackage = useTourPackageSelector();
     const cruise = useCruiseSelector();
     const carousel = useCarouselSelector();
     const rental = useRentalSelector();
     const category = useCategorySelector();

     useEffect(() => {
          (async () => {
               await dispatch(ListCarouselAction());
               await dispatch(ListAccommodationAction());
               await dispatch(ListToursPackageAction());
               await dispatch(ListSubCategoryAction());
               await dispatch(ListCategoryAction());
               await dispatch(ListCruiseAction());
               await dispatch(ListRentalAction());
          })();
     }, [dispatch]);

     return (
          <MainLayout pageTitle="Best travel community in india">
               {/* Carousel */}
               <div>
                    {carousel.data.length !== 0 ? (
                         <OwlCarousel items={1} autoplay className="owl-theme" loop margin={10} nav>
                              {carousel?.data.map(({ dataAlt, dataImage, _id }) => (
                                   <Carousel dataAlt={dataAlt} key={_id} _id={_id as string} dataImage={dataImage} />
                              ))}
                         </OwlCarousel>
                    ) : (
                         <div className="col-span-12 mt-20">
                              <h6 className="text-xl text-primary-500 uppercase text-center">No carousel found!</h6>
                         </div>
                    )}
               </div>
               {/* Carousel */}

               {/* Category */}
               {category.data.length ? (
                    <div className="mt-20 container mx-auto text-center">
                         <TitleItem path="" title="tour categories" />
                         <div className="flex flex-wrap justify-center mt-5">
                              {category.data.map(({ displayName, _id }) => (
                                   <Link
                                        to={`${displayName}/${_id}`}
                                        key={_id}
                                        className="underline uppercase text-sm px-5 py-2"
                                   >
                                        {displayName}
                                   </Link>
                              ))}
                         </div>
                    </div>
               ) : (
                    <div className="col-span-12 mt-20">
                         <h6 className="text-xl text-primary-500 uppercase text-center">No categories found!</h6>
                    </div>
               )}
               {/* Category */}

               {/* Accommodation */}
               <div className="px-5 my-20">
                    {accommodation.data.length > 0 ? (
                         <div className="">
                              <TitleItem path={`/accommodation/647dff591422a103807e619f`} title="Accommodation" />

                              <div className="grid grid-cols-12 gap-5 px-5 my-10">
                                   {accommodation.data
                                        .map(({ image, displayName, city, state, _id }) => (
                                             <div className="col-span-12 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12">
                                                  <AccommodationItem
                                                       _id={_id as string}
                                                       displayName={displayName}
                                                       image={image[0].image}
                                                       place={`${city}, ${state}`}
                                                  />
                                             </div>
                                        ))
                                        .splice(0, 6)}
                              </div>
                         </div>
                    ) : (
                         <div className="col-span-12">
                              <h6 className="text-xl text-primary-500 uppercase text-center">
                                   No accommodations found!
                              </h6>
                         </div>
                    )}
               </div>
               {/* Accommodation */}

               {/* Tours travel */}
               <div className="px-5 my-20">
                    {toursPackage.data.length > 0 ? (
                         <div className="">
                              <TitleItem path="tours-package" title="Tours & Packages" />
                              <div className="grid grid-cols-12 gap-5 px-5 my-10">
                                   {toursPackage.data
                                        .map(({ displayName, image, place, _id, duration, theme }) => (
                                             <ToursTravelItem
                                                  key={_id}
                                                  _id={_id as string}
                                                  displayName={displayName}
                                                  duration={duration}
                                                  image={image[0].image}
                                                  place={place}
                                                  theme={theme}
                                             />
                                        ))
                                        .splice(0, 6)}
                              </div>
                         </div>
                    ) : (
                         <div className="col-span-12">
                              <h6 className="text-xl text-primary-500 uppercase text-center">
                                   No tours package found!
                              </h6>
                         </div>
                    )}
               </div>

               {/* Cruise */}
               <div className="px-5 my-20">
                    {cruise.data.length > 0 ? (
                         <div className="">
                              <TitleItem path="tours-package" title="Tours & Packages" />
                              <div className="grid grid-cols-12 gap-5 px-5 my-10">
                                   {cruise.data
                                        .map(
                                             ({
                                                  SubCategory,
                                                  departure,
                                                  description,
                                                  displayName,
                                                  image,
                                                  itinerary,
                                                  sailingType,
                                                  _id,
                                             }) => (
                                                  <ToursTravelItem
                                                       key={_id}
                                                       _id={_id as string}
                                                       displayName={displayName}
                                                       duration={`${itinerary}`}
                                                       image={image}
                                                       place={`${departure.from} ${departure.to}`}
                                                       theme={`theme`}
                                                  />
                                             )
                                        )
                                        .splice(0, 6)}
                              </div>
                         </div>
                    ) : (
                         <div className="col-span-12">
                              <h6 className="text-xl text-primary-500 uppercase text-center">
                                   No cruise package found!
                              </h6>
                         </div>
                    )}
               </div>
               {/* Rental */}
               <div className="px-5 my-20">
                    {rental.data.length > 0 ? (
                         <div className="">
                              <TitleItem path="tours-package" title="Tours & Packages" />
                              <div className="grid grid-cols-12 gap-5 px-5 my-10">
                                   {rental.data
                                        .map(({ carRentalName, image, location, options, peopleAllowed, _id }) => (
                                             <ToursTravelItem
                                                  key={_id}
                                                  _id={_id as string}
                                                  displayName={carRentalName}
                                                  duration={`${options}`}
                                                  image={image[0].image}
                                                  place={`${location.from} ${location.to}`}
                                                  theme={peopleAllowed}
                                             />
                                        ))
                                        .splice(0, 6)}
                              </div>
                         </div>
                    ) : (
                         <div className="col-span-12">
                              <h6 className="text-xl text-primary-500 uppercase text-center">
                                   No rental package found!
                              </h6>
                         </div>
                    )}
               </div>
               {/* Rental */}
          </MainLayout>
     );
};
