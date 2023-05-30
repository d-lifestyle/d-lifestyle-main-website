import React from "react";

import { DefaultLayout } from "../../layout";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { CarouselItem } from "../../component";

import { AccommodationProps, CarouselProps, CategoriesProps, ToursTravelProps } from "../../interface";
import { MdShareLocation } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useAccommodationSelector, useCarouselSelector, useCategorySelector, useMainCategorySelector, useToursTravelSelector } from "../../features/slice";

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
  const accommodation = useAccommodationSelector();
  const mainCategory = useMainCategorySelector();
  const toursTravels = useToursTravelSelector();
  const navigate = useNavigate();

  return (
    <DefaultLayout pageTitle="Best travel agency in India">
      {categories.data.length !== 0 && (
        <div className="flex gap-5 justify-center bg-gray-100 py-8 flex-wrap">
          {categories.data

            ?.filter((x: any) => {
              return x.parentCategory._id === mainCategory?.data[0]?._id;
            })
            .map(({ name, _id, parentCategory }: CategoriesProps) => (
              <Link to={`/accommodation/with-categories/${parentCategory._id}`}>
                <h6
                  key={_id}
                  className="cursor-pointer bg-white px-5 py-2 rounded-md uppercase hover:text-primary-500 text-sm border-2 duration-300 hover:border-primary-500"
                >
                  {name}
                </h6></Link>
            ))}
        </div>
      )}
      <OwlCarousel items={1} autoplay className="owl-theme" loop margin={10} nav>
        {carousel.data.length !== 0 &&
          carousel.data?.map(({ dataAlt, dataImage }: CarouselProps, i: number) => (
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
          <div className="grid grid-cols-12 gap-8 mt-5 ">
            {accommodation.data.length !== 0 &&
              accommodation.data
                ?.map(
                  ({
                    city,
                    displayName,
                    state,
                    _id,
                    image,
                  }: AccommodationProps) => (
                    <div
                      key={_id}
                      className="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 h-full"
                    >
                      <div className="bg-white rounded-md group  border-2 hover:border-opacity-50 hover:border-primary-500 hover:shadow-xl duration-300">
                        <figure className="max-w-lg">
                          <img
                            className="h-auto max-w-full"
                            src={image[0].image}
                            alt={image[0].title}
                          />
                        </figure>

                        <div className="px-3 py-2">
                          <h6 className="text-lg capitalize group-hover:text-primary-500 truncate">
                            {displayName}
                          </h6>
                          <div className="flex gap-3 items-center my-3">
                            <MdShareLocation size={23} />
                            <p className="text-gray-500 text-sm uppercase font-semibold">
                              {state}, {city}
                            </p>
                          </div>
                          <button
                            onClick={() => navigate(`/accommodation/${_id}`)}
                            className="rounded-md py-2 w-full bg-primary-100"
                          >
                            <span className="text-sm text-primary-500 uppercase">
                              view details
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                )
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
              toursTravels?.data
                ?.map(
                  ({
                    SubCategory,
                    displayName,
                    place,
                    duration,
                    _id,
                    image,
                  }: ToursTravelProps) => (
                    <div
                      key={_id}
                      className="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12"
                    >
                      <div className="bg-white rounded-md group border-transparent border-2 hover:border-opacity-50 hover:border-secondary-500 hover:shadow-xl duration-300 cursor-pointer">
                        {image.length !== 0 && (
                          <img
                            src={image[0].image}
                            alt={image[0].title}
                            width="100%"
                          />
                        )}
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

      <div className="bg-secondary-600 mt-20 px-20 py-10">
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
      <div className="bg-secondary-600 border-t-2 px-20 py-10">
        <div className="">
          <h5 className="text-xl uppercase text-center text-white">
            BEST PLACES TO VISIT outside INDIA BY MONTH
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
      <div className="bg-gray-100 py-10" id="services">
        <h6 className="text-2xl uppercase text-gray-900 text-center">explore our life style services</h6>
        <div className="flex gap-5 justify-center flex-wrap mt-10">
          {categories.data

            ?.filter((x: any) => {
              return x.parentCategory._id === mainCategory?.data[0]?._id;
            })

            .map(({ name, _id }: CategoriesProps) => (
              <h6
                key={_id}
                className="cursor-pointer bg-white px-5 py-2 rounded-md uppercase hover:text-primary-500 text-sm border-2 duration-300 hover:border-primary-500"
              >
                {name}
              </h6>
            ))}
        </div>
      </div>
      <OwlCarousel items={1} autoplay className="owl-theme" loop margin={10} nav>
        {carousel.data.length &&
          carousel.data.map(({ dataAlt, dataImage }: CarouselProps, i: number) => (
            <CarouselItem key={i} image={dataImage} altText={dataAlt} />
          ))}
      </OwlCarousel>
    </DefaultLayout>
  );
};
