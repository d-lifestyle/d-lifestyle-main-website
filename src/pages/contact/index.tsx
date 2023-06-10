import React, { useEffect } from "react";
import { MainLayout } from "../../layout";
import { GetAdminContentAction, MakeContactAction, useAppDispatch, useContentSelector } from "../../redux";
import {
     AiFillFacebook,
     AiFillInstagram,
     AiFillLinkedin,
     AiFillMail,
     AiFillPushpin,
     AiTwotonePhone,
} from "react-icons/ai";
import { Formik } from "formik";
import { ContactFormSchema, InitialContactForm } from "../../validation/contact.validation";
import { ContactFormProps } from "../../interface";
import { enqueueSnackbar } from "notistack";
import { Link, useNavigate } from "react-router-dom";

export const Contact = () => {
     const dispatch = useAppDispatch();
     const content = useContentSelector();
     const navigate = useNavigate();

     useEffect(() => {
          (async () => {
               await dispatch(GetAdminContentAction());
          })();
     }, [dispatch]);

     const SendRequest = async ({ email, name, phone, body, placeToVisit }: ContactFormProps) => {
          const data = await dispatch(
               MakeContactAction({
                    email,
                    name,
                    phone,
                    body,
                    placeToVisit,
               })
          );
          if (data.type === "contact/make/fulfilled") {
               navigate("/", { replace: true });
               enqueueSnackbar(data.payload.data, { variant: "success" });
          }
          if (data.type === "contact/make/rejected") {
               enqueueSnackbar(data.payload, { variant: "error" });
          }
     };

     return (
          <MainLayout pageTitle="Reach us whenever you need">
               <div className="grid grid-cols-12 justify-center items-center h-[90vh]">
                    <div className="col-span-12 xs:col-span-12 sm:col-span-12 md:col-span-12 xl:col-span-5 lg:col-span-5 bg-primary-300 px-5 py-20 h-full">
                         <h5 className="text-4xl font-semibold">Love to hear from you, Get in Touch</h5>
                         <div className="mt-10 py-3 flex flex-col gap-5">
                              <div className="flex gap-3 items-center text-gray-800">
                                   <AiFillPushpin size={30} />
                                   <p className="">{content?.data?.contactInfo?.address}</p>
                              </div>
                              <div className="flex gap-3 items-center text-gray-800">
                                   <AiTwotonePhone size={30} />
                                   <p className="">{content?.data?.contactInfo?.phone}</p>
                              </div>
                              <div className="flex gap-3 items-center text-gray-800">
                                   <AiFillMail size={30} />
                                   <p className="">{content?.data?.email}</p>
                              </div>
                              <div className="mt-50">
                                   <h6>Social links :</h6>
                                   <div className="flex gap-3 flex-col mt-5">
                                        <div className="flex gap-3 items-center text-gray-800">
                                             <AiFillFacebook size={30} />
                                             <Link to={`${content?.data?.contactInfo?.fbLink}`}>
                                                  <p className="">{content?.data?.contactInfo?.fbLink}</p>
                                             </Link>
                                        </div>
                                        <div className="flex gap-3 items-center text-gray-800">
                                             <AiFillInstagram size={30} />
                                             <p className="">{content?.data?.contactInfo?.instaLink}</p>
                                        </div>

                                        <div className="flex gap-3 items-center text-gray-800">
                                             <AiFillLinkedin size={30} />
                                             <p className="">{content?.data?.contactInfo?.instaLink}</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="col-span-12 xs:col-span-12 sm:col-span-12 md:col-span-12 xl:col-span-7 lg:col-span-7 flex justify-center flex-col items-center">
                         <div className="flex justify-start w-full px-10">
                              <h6 className="text-2xl text-left uppercase">contact for more info</h6>
                         </div>
                         <Formik
                              validationSchema={ContactFormSchema}
                              initialValues={InitialContactForm}
                              onSubmit={SendRequest}
                         >
                              {({ touched, errors, values, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
                                   <div className="w-full px-10 mt-10 justify-center">
                                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                             <div>
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
                                             <div className="flex w-full gap-3">
                                                  <div className="flex-1">
                                                       <input
                                                            type="email"
                                                            value={values.email}
                                                            onChange={handleChange("email")}
                                                            onBlur={handleBlur("email")}
                                                            placeholder="email address"
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
                                                            type="number"
                                                            value={values.phone}
                                                            onChange={handleChange("phone")}
                                                            onBlur={handleBlur("phone")}
                                                            placeholder="Enter phone number"
                                                            className="px-5 py-2 border-2 focus:outline-none border-primary-500 w-full rounded-md"
                                                       />
                                                       {touched.phone && (
                                                            <p className="text-red-500 mt-1 text-right text-xs uppercase">
                                                                 {errors.phone}
                                                            </p>
                                                       )}
                                                  </div>
                                             </div>
                                             <div className="flex-1">
                                                  <input
                                                       value={values.placeToVisit}
                                                       onChange={handleChange("placeToVisit")}
                                                       onBlur={handleBlur("placeToVisit")}
                                                       placeholder="Enter place you need to visit"
                                                       className="px-5 py-2 border-2 focus:outline-none border-primary-500 w-full rounded-md"
                                                  />
                                                  {touched.placeToVisit && (
                                                       <p className="text-red-500 mt-1 text-right text-xs uppercase">
                                                            {errors.placeToVisit}
                                                       </p>
                                                  )}
                                             </div>
                                             <div className="flex-1">
                                                  <textarea
                                                       className="px-5 py-2 border-2 focus:outline-none border-primary-500 w-full rounded-md resize-none"
                                                       name="body"
                                                       id="body"
                                                       rows={5}
                                                       placeholder="Enter a message for our agent (optional)"
                                                  />
                                                  {touched.body && (
                                                       <p className="text-red-500 mt-1 text-right text-xs uppercase">
                                                            {errors.body}
                                                       </p>
                                                  )}
                                             </div>
                                             <div className="flex-1 flex justify-end">
                                                  <button
                                                       className="bg-primary-500 px-10 py-2 uppercase text-white rounded-md"
                                                       type="submit"
                                                  >
                                                       submit
                                                  </button>
                                             </div>
                                        </form>
                                   </div>
                              )}
                         </Formik>
                    </div>
               </div>
          </MainLayout>
     );
};
