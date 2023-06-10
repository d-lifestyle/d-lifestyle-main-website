import { Formik } from "formik";
import { MainLayout } from "../../layout";
import { InitialFlightValues, ValidationFlightSchema } from "../../validation";
import { useCallback, useState } from "react";
import { SendRequestForFlightAction, useAppDispatch } from "../../redux";
import { FlightProps } from "../../interface";
import { enqueueSnackbar } from "notistack";
import clsx from "clsx";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MdFlight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const Flight = () => {
     const dispatch = useAppDispatch();
     const [checkInValue, onCheckInChange] = useState(new Date());
     const [checkOutValue, onCheckOutChange] = useState(new Date());
     const [checkIn, setCheckIn] = useState<boolean>(false);
     const [checkOut, setCheckOut] = useState<boolean>(false);
     const navigate = useNavigate();

     const SendRequest = useCallback(async (e: any) => {
          const data = await dispatch(
               SendRequestForFlightAction({
                    adults: e.adults,
                    departure: checkInValue as never as string,
                    displayName: e.displayName,
                    from: e.from,
                    returnDate: checkOutValue as never as string,
                    to: e.to,
                    travelClass: e.travelClass,
                    child: e.child,
                    infants: e.infants,
               })
          );
          if (data.type === "flight/new/fulfilled") {
               navigate("/", { replace: true });
               return enqueueSnackbar(data.payload, { variant: "success" });
          }
          if (data.type === "flight/new/rejected") {
               return enqueueSnackbar(data.payload, { variant: "error" });
          }
     }, []);
     return (
          <MainLayout pageTitle="get a quotes about flights">
               <div className="container mx-auto my-20">
                    <div className="w-[50%] mx-auto">
                         <div className="flex items-center gap-5">
                              <MdFlight size={50} />
                              <h6 className="text-2xl">
                                   Flight bookings, Cheap flights, Air ticket bookings at lower price
                              </h6>
                         </div>
                         <Formik
                              initialValues={InitialFlightValues}
                              validationSchema={ValidationFlightSchema}
                              onSubmit={SendRequest}
                         >
                              {({ errors, values, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
                                   <form onSubmit={handleSubmit} className="mt-10">
                                        <div className="flex-1">
                                             <input
                                                  value={values.displayName}
                                                  onChange={handleChange("displayName")}
                                                  onBlur={handleBlur("displayName")}
                                                  placeholder="Enter your name"
                                                  className="px-5 py-2 border-2 focus:outline-none border-primary-500 w-full rounded-md"
                                             />
                                             {touched.displayName && (
                                                  <p className="text-red-500 mt-1 text-right text-xs uppercase">
                                                       {errors.displayName}
                                                  </p>
                                             )}
                                        </div>
                                        <div className="flex gap-3 mt-5">
                                             <div className="flex-1">
                                                  <input
                                                       value={values.from}
                                                       onChange={handleChange("from")}
                                                       onBlur={handleBlur("from")}
                                                       placeholder="Enter place from"
                                                       className="px-5 py-2 border-2 focus:outline-none border-primary-500 w-full rounded-md"
                                                  />
                                                  {touched.from && (
                                                       <p className="text-red-500 mt-1 text-right text-xs uppercase">
                                                            {errors.from}
                                                       </p>
                                                  )}
                                             </div>
                                             <div className="flex-1">
                                                  <input
                                                       value={values.to}
                                                       onChange={handleChange("to")}
                                                       onBlur={handleBlur("to")}
                                                       placeholder="Enter place to"
                                                       className="px-5 py-2 border-2 focus:outline-none border-primary-500 w-full rounded-md"
                                                  />
                                                  {touched.to && (
                                                       <p className="text-red-500 mt-1 text-right text-xs uppercase">
                                                            {errors.to}
                                                       </p>
                                                  )}
                                             </div>
                                        </div>

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
                                                            Select Departure :-
                                                       </div>{" "}
                                                       <div className="text-lg">
                                                            {moment(checkInValue).format("dddd, LL")}
                                                       </div>
                                                  </button>
                                                  {checkIn && (
                                                       <Calendar
                                                            minDate={new Date()}
                                                            tileClassName="bg-primary-50 disabled:bg-gray-100"
                                                            className="absolute top-[65%] border-primary-500 shadow-md"
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
                                                            Select Return Date :-
                                                       </div>
                                                       <div className="text-lg">
                                                            {moment(checkOutValue).format("dddd, LL")}
                                                       </div>
                                                  </button>
                                                  {checkOut && !checkIn && (
                                                       <Calendar
                                                            minDate={new Date()}
                                                            tileClassName="bg-primary-100 disabled:bg-gray-100 tile-now:ve:bg-primary-500 active:text-primary-500"
                                                            className="absolute top-[65%] border-primary-500 shadow-md"
                                                            onChange={(e) => onCheckOutChange(e as Date)}
                                                            value={checkOutValue}
                                                       />
                                                  )}
                                             </div>
                                        </div>
                                        <div className="flex gap-3">
                                             <div className="flex-1">
                                                  <input
                                                       value={values.adults}
                                                       onChange={handleChange("adults")}
                                                       onBlur={handleBlur("adults")}
                                                       placeholder="number of adults"
                                                       className="px-5 py-2 border-2 focus:outline-none border-primary-500 w-full rounded-md"
                                                  />
                                                  {touched.adults && (
                                                       <p className="text-red-500 mt-1 text-right text-xs uppercase">
                                                            {errors.adults}
                                                       </p>
                                                  )}
                                             </div>
                                             <div className="flex-1">
                                                  <input
                                                       value={values.child}
                                                       onChange={handleChange("child")}
                                                       onBlur={handleBlur("child")}
                                                       placeholder="number of childs"
                                                       className="px-5 py-2 border-2 focus:outline-none border-primary-500 w-full rounded-md"
                                                  />
                                                  {touched.child && (
                                                       <p className="text-red-500 mt-1 text-right text-xs uppercase">
                                                            {errors.child}
                                                       </p>
                                                  )}
                                             </div>
                                             <div className="flex-1">
                                                  <input
                                                       value={values.infants}
                                                       onChange={handleChange("infants")}
                                                       onBlur={handleBlur("infants")}
                                                       placeholder="number of infants"
                                                       className="px-5 py-2 border-2 focus:outline-none border-primary-500 w-full rounded-md"
                                                  />
                                                  {touched.infants && (
                                                       <p className="text-red-500 mt-1 text-right text-xs uppercase">
                                                            {errors.infants}
                                                       </p>
                                                  )}
                                             </div>
                                        </div>
                                        <div className="flex-1 mt-5">
                                             <input
                                                  value={values.travelClass}
                                                  onChange={handleChange("travelClass")}
                                                  onBlur={handleBlur("travelClass")}
                                                  placeholder="travelClass"
                                                  className="px-5 py-2 border-2 focus:outline-none border-primary-500 w-full rounded-md"
                                             />
                                             {touched.travelClass && (
                                                  <p className="text-red-500 mt-1 text-right text-xs uppercase">
                                                       {errors.travelClass}
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
          </MainLayout>
     );
};
