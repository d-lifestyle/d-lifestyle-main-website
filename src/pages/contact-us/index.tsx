import React from "react";
import { DefaultLayout } from "../../layout";
import { Formik } from "formik";
import { ContactInitialValidation, ContactValidationSchema } from "../../validation";
import { ContactFormProps } from "../../interface";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMessage } from "react-icons/ai";
import { AppDispatch } from "../../features";
import { useDispatch } from "react-redux";
import { ContactMeAction } from "../../features/action";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useGeneralSelector } from "../../features/slice";

export const ContactUsPage = () => {
     const dispatch = useDispatch<AppDispatch>();
     const general = useGeneralSelector();
     const navigate = useNavigate();
     const handleContactSubmit = async (e: ContactFormProps) => {
          const data = await dispatch(ContactMeAction(e));
          if (data.type === "contact/new/fulfilled") {
               navigate("/", { replace: true });
               return enqueueSnackbar(data.payload, { variant: "success" });
          }
          if (data.type === "contact/new/rejected") {
               return enqueueSnackbar(data.payload, { variant: "error" });
          }
     };
     return (
          <DefaultLayout pageTitle="Best travel agency in India">
               <div
                    style={{
                         backgroundImage: `url(https://images.pexels.com/photos/14715105/pexels-photo-14715105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
                         height: "50vh",
                         backgroundPosition: "center",
                         backgroundSize: "cover",
                         backgroundAttachment: "fixed",
                    }}
               >
                    <div className="bg-gray-900 bg-opacity-50 w-full h-full flex justify-center items-center">
                         <div className="text-center">
                              <h6 className="text-white uppercase text-4xl font-semibold">Get In Touch</h6>
                              <p className="text-gray-400 mt-3">{general.content.aboutInfo.slogan}</p>
                         </div>
                    </div>
               </div>
               <div className="bg-gradient-to-tl from-primary-100 to-secondary-100 py-20 h-auto">
                    <div className="w-[50%] mx-auto rounded-md bg-white p-3 shadow-xl border-2 border-gray-300 flex flex-col divide-y-2">
                         <div className="pb-5">
                              <h6 className="capitalize text-gray-600 text-2xl font-semibold">Drop Us a Line.</h6>
                         </div>
                         <div className="py-5">
                              <Formik
                                   initialValues={ContactInitialValidation}
                                   validationSchema={ContactValidationSchema}
                                   onSubmit={handleContactSubmit}
                              >
                                   {({
                                        handleBlur,
                                        handleChange,
                                        handleSubmit,
                                        values,
                                        touched,
                                        errors,
                                        isSubmitting,
                                   }) => (
                                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                             <div className="flex items-center gap-3">
                                                  <div className="flex-1">
                                                       <input
                                                            onChange={handleChange("name")}
                                                            onBlur={handleBlur("name")}
                                                            value={values.name}
                                                            type="text"
                                                            className="w-full py-2 px-5 focus:border-primary-500 rounded-md border-2 focus:outline-none"
                                                            placeholder="Enter your name"
                                                       />
                                                       {touched.name && (
                                                            <p className="text-red-500 text-xs mt-1 text-right uppercase">
                                                                 {errors.name}
                                                            </p>
                                                       )}
                                                  </div>
                                             </div>
                                             <div className="flex items-center gap-3">
                                                  <div className="flex-1">
                                                       <input
                                                            onChange={handleChange("email")}
                                                            onBlur={handleBlur("email")}
                                                            value={values.email}
                                                            type="email"
                                                            className="w-full py-2 px-5 focus:border-primary-500 rounded-md border-2 focus:outline-none"
                                                            placeholder="Enter email address"
                                                       />
                                                       {touched.email && (
                                                            <p className="text-red-500 text-xs mt-1 text-right uppercase">
                                                                 {errors.email}
                                                            </p>
                                                       )}
                                                  </div>
                                                  <div className="flex-1">
                                                       <input
                                                            onChange={handleChange("phone")}
                                                            onBlur={handleBlur("phone")}
                                                            value={values.phone}
                                                            type="number"
                                                            className="w-full py-2 px-5 focus:border-primary-500 rounded-md border-2 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                            placeholder="Enter mobile number"
                                                       />
                                                       {touched.phone && (
                                                            <p className="text-red-500 text-xs mt-1 text-right uppercase">
                                                                 {errors.phone}
                                                            </p>
                                                       )}
                                                  </div>
                                             </div>
                                             <div className="flex items-center gap-3">
                                                  <div className="flex-1">
                                                       <input
                                                            onChange={handleChange("placeToVisit")}
                                                            onBlur={handleBlur("placeToVisit")}
                                                            value={values.placeToVisit}
                                                            type="text"
                                                            className="w-full py-2 px-5 focus:border-primary-500 rounded-md border-2 focus:outline-none"
                                                            placeholder="Place you need to visit"
                                                       />
                                                       {touched.placeToVisit && (
                                                            <p className="text-red-500 text-xs mt-1 text-right uppercase">
                                                                 {errors.placeToVisit}
                                                            </p>
                                                       )}
                                                  </div>
                                             </div>
                                             <div className="flex items-center gap-3">
                                                  <div className="flex-1">
                                                       <textarea
                                                            onChange={handleChange("body")}
                                                            onBlur={handleBlur("body")}
                                                            value={values.body}
                                                            name=""
                                                            id=""
                                                            placeholder="Write us something..."
                                                            className="w-full py-2 px-5 focus:border-primary-500 rounded-md border-2 focus:outline-none resize-none"
                                                            rows={3}
                                                       />
                                                       {touched.body && (
                                                            <p className="text-red-500 text-xs mt-1 text-right uppercase">
                                                                 {errors.body}
                                                            </p>
                                                       )}
                                                  </div>
                                             </div>
                                             <div>
                                                  <button
                                                       className="flex items-center gap-3 bg-secondary-500 px-10 py-3 rounded-md text-white capitalize text-md"
                                                       type="submit"
                                                       disabled={isSubmitting}
                                                  >
                                                       <AiOutlineMessage size={23} />
                                                       Send message
                                                  </button>
                                             </div>
                                        </form>
                                   )}
                              </Formik>
                         </div>
                    </div>
               </div>
               <div className="py-20">
                    <div className="pb-5 text-center">
                         <div className="w-[40%] shadow-xl border-2 border-400 mx-auto p-3 rounded-md">
                              <h6 className="text-3xl font-semibold text-gray-900">DLifeStyle Contact Support</h6>
                              <div className="text-lg flex items-center mt-5 whitespace-pre-line">
                                   Phone : <p className="text-lg">&nbsp;{general.content.contactInfo.phone}</p>
                              </div>
                              <div className="text-lg flex items-center mt-5">
                                   Email : <p className="text-lg">&nbsp;{general.content.email}</p>
                              </div>
                              <div className="text-lg flex items-center mt-5">
                                   Address : <p className="text-lg">&nbsp;{general.content.contactInfo.address}</p>
                              </div>
                              <div className="text-lg flex items-center mt-5 gap-3 border-t-2 pt-5 text-center justify-center">
                                   <AiOutlineFacebook
                                        onClick={() => navigate(general.content.contactInfo.fbLink as string)}
                                        size={30}
                                   />
                                   <AiOutlineInstagram
                                        size={30}
                                        onClick={() => navigate(general.content.contactInfo.instaLink as string)}
                                   />
                              </div>
                         </div>
                    </div>
               </div>
          </DefaultLayout>
     );
};
