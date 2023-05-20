import React, { useEffect, useState } from "react";
import { DefaultLayout } from "../../../layout";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../features";
import { GetAccommodationById, SendEnquiryAction } from "../../../features/action";
import { useAccommodationSelector } from "../../../features/slice";
import ReactOwlCarousel from "react-owl-carousel";
import { CarouselItem } from "../../../component";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineRight } from "react-icons/ai";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import clsx from "clsx";
import { ContactFormProps, EnquiryFormProps, NewEnquiryFormProps } from "../../../interface";
import { Formik } from "formik";
import { EnquiryInitial, EnquirySchema } from "../../../validation";
import { enqueueSnackbar } from "notistack";

export const AccommodationDetails = () => {
     const params = useParams();
     const dispatch = useDispatch<AppDispatch>();
     const accommodation = useAccommodationSelector();
     useEffect(() => {
          (async () => {
               if (params.id) {
                    const data = await dispatch(GetAccommodationById(params.id));
                    if (data.type === "accommodation/by-id/rejected") {
                         <Navigate to="/" replace />;
                    }
               } else {
                    <Navigate to="/" replace />;
               }
          })();
     }, [dispatch, params.id]);
     const [checkInValue, onCheckInChange] = useState(new Date());
     const [checkOutValue, onCheckOutChange] = useState(new Date());
     const [checkIn, setCheckIn] = useState<boolean>(false);
     const [checkOut, setCheckOut] = useState<boolean>(false);
     const navigate = useNavigate();

     const SendQuery = async (e: NewEnquiryFormProps) => {
          const data = await dispatch(
               SendEnquiryAction({
                    checkIn: checkInValue.toString(),
                    checkOut: checkOutValue.toString(),
                    dataId: params.id,
                    email: e.email,
                    fullName: e.name,
                    phone: e.phone,
                    body: e.body,
               })
          );
          if (data.type === "enquiry/new/rejected") {
               return enqueueSnackbar(data.payload, { variant: "error" });
          }
          if (data.type === "enquiry/new/fulfilled") {
               navigate("/", { replace: true });
               return enqueueSnackbar(data.payload, { variant: "success" });
          }
     };

     return (
          <DefaultLayout pageTitle="Best travel agency in India">
               <nav
                    className="flex container mx-auto mt-5 bg-primary-50 text-primary-700 border border-primary-200 py-3 px-5 rounded-lg mb-4"
                    aria-label="Breadcrumb"
               >
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                         <li className="inline-flex items-center">
                              <Link to="/" className="text-primary-700 hover:text-primary-900 inline-flex items-center">
                                   Home
                              </Link>
                         </li>
                         <li>
                              <div className="flex items-center">
                                   <AiOutlineRight fill="currentColor" />
                                   <Link
                                        to="#"
                                        className="text-primary-700 hover:text-primary-900 ml-1 md:ml-2 text-sm font-medium"
                                   >
                                        Accommodation
                                   </Link>
                              </div>
                         </li>
                         <li aria-current="page">
                              <div className="flex items-center">
                                   <AiOutlineRight fill="currentColor" />
                                   <span className="text-primary-400 ml-1 md:ml-2 text-sm font-medium">
                                        {accommodation.single?.displayName}
                                   </span>
                              </div>
                         </li>
                    </ol>
               </nav>
               <div className="">
                    <ReactOwlCarousel items={1} autoplay className="owl-theme" loop margin={10} nav>
                         {accommodation.single?.image.map(({ image, title }, i) => (
                              <CarouselItem key={i} image={image} altText={title} />
                         ))}
                    </ReactOwlCarousel>
                    <div className="mx-auto my-10 container px-10">
                         <h3 className="text-5xl">{accommodation.single?.displayName}</h3>
                         <div className="flex gap-3 mt-5 items-center border border-primary-500 py-3 px-2 border-dashed">
                              <HiOutlineLocationMarker size={35} className="text-gray-500" />
                              <p className="text-xl text-gray-500 font-semibold">
                                   {accommodation.single?.city}, {accommodation.single?.state}
                              </p>
                         </div>
                         <div className="flex gap-3 items-center mt-10 flex-wrap">
                              <div className="my-10 xl:w-[50%]">
                                   <h6 className="text-3xl mb-5 text-left font-semibold">
                                        About{" "}
                                        <span className="text-primary-500">{accommodation.single?.displayName}</span> :-
                                   </h6>
                                   <p
                                        className="text-grey-500 whitespace-pre-wrap"
                                        dangerouslySetInnerHTML={{
                                             __html: accommodation.single?.description as string,
                                        }}
                                   />
                              </div>
                              <div className="xl:flex-1 xl:w-[50%] lg:w-[50%] md:w-[90%] rounded-md mx-auto p-3 relative bg-white shadow-xl border">
                                   <Formik
                                        initialValues={EnquiryInitial as NewEnquiryFormProps}
                                        validationSchema={EnquirySchema}
                                        onSubmit={SendQuery}
                                   >
                                        {({ handleSubmit, handleBlur, handleChange, touched, values, errors }) => (
                                             <form onSubmit={handleSubmit}>
                                                  <h6 className="text-xl text-left font-semibold">
                                                       Book{" "}
                                                       <span className="text-gray-600">
                                                            {accommodation.single?.displayName}
                                                       </span>
                                                       :-
                                                  </h6>
                                                  <p className="mt-3 text-gray-500">
                                                       If available with us, Your can also customize your package please
                                                       fill post your query form!!
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
                                                  <button className="px-5 py-2 w-full mt-3 rounded-md uppercase bg-primary-500 text-white">
                                                       enquiry now
                                                  </button>
                                             </form>
                                        )}
                                   </Formik>
                              </div>
                         </div>
                    </div>
               </div>
          </DefaultLayout>
     );
};
