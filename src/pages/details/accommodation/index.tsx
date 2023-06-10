import React, { useEffect, useState } from "react";
import { MainLayout } from "../../../layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
     ListAccommodationByIdAction,
     ListSubCategoryByCategoryIdAction,
     MakeEnquiryAction,
     useAccommodationSelector,
     useAppDispatch,
} from "../../../redux";
import ReactOwlCarousel from "react-owl-carousel";
import { Carousel } from "../../../component";
import { IoLocationOutline } from "react-icons/io5";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import { Formik } from "formik";
import { EnquiryInitial, EnquirySchema, NewEnquiryFormProps } from "../../../validation/contact.validation";
import clsx from "clsx";
import moment from "moment";
import { enqueueSnackbar } from "notistack";

export const AccommodationDetails = () => {
     const [checkInValue, onCheckInChange] = useState(new Date());
     const [checkOutValue, onCheckOutChange] = useState(new Date());
     const [checkIn, setCheckIn] = useState<boolean>(false);
     const [checkOut, setCheckOut] = useState<boolean>(false);
     const params = useParams();
     const dispatch = useAppDispatch();
     const accommodation = useAccommodationSelector();
     const navigate = useNavigate();

     useEffect(() => {
          (async () => {
               await dispatch(ListAccommodationByIdAction(params.id as string));
               await dispatch(ListSubCategoryByCategoryIdAction(params.id as string));
          })();
     }, [params, dispatch]);

     const SendQuery = async (e: NewEnquiryFormProps) => {
          const data = await dispatch(
               MakeEnquiryAction({
                    checkIn: checkInValue as any,
                    checkOut: checkOutValue as any,
                    dataId: params.id as string,
                    email: e.email,
                    fullName: e.name,
                    phone: e.phone,
                    body: e.body,
               })
          );
          if (data.type === "enquiry/make/fulfilled") {
               enqueueSnackbar(data.payload.data, { variant: "success" });
               navigate("/", { replace: true });
          }
          if (data.type === "enquiry/make/rejected") {
               return enqueueSnackbar(data.payload, { variant: "error" });
          }
     };

     return (
          <MainLayout pageTitle="Accommodation details">
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
                                        Accommodation
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
                                        {accommodation?.single?.displayName}
                                   </Link>
                              </div>
                         </li>
                    </ol>
               </nav>
               {accommodation.single?.image?.length > 0 ? (
                    <div className="container mx-auto">
                         <ReactOwlCarousel items={1} autoplay className="owl-theme" loop margin={10} nav>
                              {accommodation?.single?.image?.map(({ image, title }, i) => (
                                   <Carousel dataAlt={title} key={title} _id={JSON.stringify(i)} dataImage={image} />
                              ))}
                         </ReactOwlCarousel>
                    </div>
               ) : (
                    <div className="col-span-12">
                         <h6 className="text-xl text-primary-500 uppercase text-center">No images were found!</h6>
                    </div>
               )}
               <div className="container mx-auto my-10">
                    <div className="my-5">
                         <h6 className="text-2xl capitailize font-semibold">
                              {accommodation?.single?.displayName} - {accommodation?.single?.SubCategory?.displayName}
                         </h6>
                         <div className="flex gap-2 mt-2 text-gray-500 items-center">
                              <IoLocationOutline size={20} className="stroke-primary-500" />
                              <h6>
                                   {accommodation.single.city}, {accommodation.single.state}
                              </h6>
                         </div>
                    </div>
                    <div className="px-2 flex gap-5 flex-wrap">
                         <div className="">
                              More Information :
                              <p
                                   className="text-gray-500 mt-5 h-auto whitespace-pre-line"
                                   dangerouslySetInnerHTML={{ __html: accommodation.single.description }}
                              />
                         </div>
                         <div className=" rounded-md mx-auto p-3 relative bg-white border">
                              <Formik
                                   initialValues={EnquiryInitial as NewEnquiryFormProps}
                                   validationSchema={EnquirySchema}
                                   onSubmit={SendQuery}
                              >
                                   {({ handleSubmit, handleBlur, handleChange, touched, values, errors }) => (
                                        <form onSubmit={handleSubmit}>
                                             <h6 className="text-xl text-left font-semibold">
                                                  Get more quotes from sales{" "}
                                                  <span className="text-primary-600">
                                                       {accommodation.single?.displayName}
                                                  </span>
                                                  :-
                                             </h6>
                                             <p className="mt-3 text-gray-500">
                                                  Be available with us, You can also customize your package please fill
                                                  post your query form!!
                                             </p>
                                             <div className="py-5 flex items-center gap-3">
                                                  <div className="flex-1">
                                                       <button
                                                            type="button"
                                                            className={clsx(
                                                                 checkInValue < new Date()
                                                                      ? "border-2 border-primary-500"
                                                                      : "bg-primary-500 text-white",
                                                                 "w-full flex flex-col px-5 py-2 rounded-md"
                                                            )}
                                                            onClick={() => setCheckIn(!checkIn)}
                                                       >
                                                            <div
                                                                 className={clsx(
                                                                      "text-sm",
                                                                      checkInValue < new Date()
                                                                           ? "text-gray-900"
                                                                           : "text-gray-200"
                                                                 )}
                                                            >
                                                                 Select Check In :-
                                                            </div>{" "}
                                                            <div className="text-lg">
                                                                 {moment(checkInValue).format("dddd, LL")}
                                                            </div>
                                                       </button>
                                                       {checkIn && (
                                                            <Calendar
                                                                 minDate={new Date()}
                                                                 tileClassName="bg-primary-50 disabled:bg-gray-100"
                                                                 className="absolute top-[40%] border-primary-500 shadow-md"
                                                                 onChange={(e) => onCheckInChange(e as Date)}
                                                                 value={checkInValue}
                                                            />
                                                       )}
                                                  </div>
                                                  <div className="flex-1">
                                                       <button
                                                            type="button"
                                                            className={clsx(
                                                                 checkOutValue < new Date()
                                                                      ? "border-2 border-primary-500"
                                                                      : "bg-primary-500 text-white",
                                                                 "w-full flex flex-col px-5 py-2 rounded-md"
                                                            )}
                                                            onClick={() => setCheckOut(!checkOut)}
                                                       >
                                                            <div
                                                                 className={clsx(
                                                                      "text-sm",
                                                                      checkOutValue < new Date()
                                                                           ? "text-gray-900"
                                                                           : "text-gray-200"
                                                                 )}
                                                            >
                                                                 Select Check Out :-
                                                            </div>
                                                            <div className="text-lg">
                                                                 {moment(checkOutValue).format("dddd, LL")}
                                                            </div>
                                                       </button>
                                                       {checkOut && !checkIn && (
                                                            <Calendar
                                                                 minDate={new Date()}
                                                                 tileClassName="bg-primary-100 disabled:bg-gray-100 tile-now:ve:bg-primary-500 active:text-primary-500"
                                                                 className="absolute top-[40%] border-primary-500 shadow-md"
                                                                 onChange={(e) => onCheckOutChange(e as Date)}
                                                                 value={checkOutValue}
                                                            />
                                                       )}
                                                  </div>
                                             </div>
                                             <div className="flex flex-col mb-3">
                                                  <input
                                                       value={values.name}
                                                       onChange={handleChange("name")}
                                                       onBlur={handleBlur("name")}
                                                       placeholder="Full name"
                                                       className="px-5 py-2 border-2 focus:outline-none border-primary-500 w-full rounded-md"
                                                  />
                                                  {touched.name && (
                                                       <p className="text-red-500 mt-1 text-right text-xs uppercase">
                                                            {errors.name}
                                                       </p>
                                                  )}
                                             </div>
                                             <div className="flex gap-3">
                                                  <div className="flex-1">
                                                       <input
                                                            value={values.email}
                                                            onChange={handleChange("email")}
                                                            onBlur={handleBlur("email")}
                                                            placeholder="Write your email"
                                                            className="px-5 py-2 border-2 focus:outline-none border-primary-500 w-full rounded-md"
                                                       />
                                                       {touched.email && (
                                                            <p className="text-red-500 mt-1 text-right text-xs uppercase">
                                                                 {errors.email}
                                                            </p>
                                                       )}
                                                  </div>
                                                  <div className="flex-1">
                                                       <input
                                                            value={values.phone}
                                                            onChange={handleChange("phone")}
                                                            onBlur={handleBlur("phone")}
                                                            placeholder="Contact number"
                                                            className="px-5 py-2 border-2 focus:outline-none border-primary-500 w-full rounded-md"
                                                       />
                                                       {touched.phone && (
                                                            <p className="text-red-500 mt-1 text-right text-xs uppercase">
                                                                 {errors.phone}
                                                            </p>
                                                       )}
                                                  </div>
                                             </div>
                                             <div className="mt-3 flex flex-col gap-3 mb-3">
                                                  <textarea
                                                       value={values.body}
                                                       onChange={handleChange("body")}
                                                       onBlur={handleBlur("body")}
                                                       rows={3}
                                                       placeholder="Ask our travel consultant a Question"
                                                       className="resize-none px-5 py-2 border-2 focus:outline-none border-primary-500 w-full rounded-md"
                                                  />
                                                  {touched.body && (
                                                       <p className="text-red-500 mt-1 text-right text-xs uppercase">
                                                            {errors.body}
                                                       </p>
                                                  )}
                                             </div>
                                             <button
                                                  type="submit"
                                                  className="px-5 py-2 w-full mt-3 rounded-md uppercase bg-primary-500 text-white"
                                             >
                                                  enquiry now
                                             </button>
                                        </form>
                                   )}
                              </Formik>
                         </div>
                    </div>
               </div>
          </MainLayout>
     );
};
