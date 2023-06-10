import React, { useEffect } from "react";
import { MainLayout } from "../../layout";
import { GetAdminContentAction, useAppDispatch, useContentSelector } from "../../redux";
import { useNavigate } from "react-router-dom";

export const About = () => {
     const dispatch = useAppDispatch();
     const content = useContentSelector();
     const navigate = useNavigate();

     useEffect(() => {
          (async () => {
               await dispatch(GetAdminContentAction());
          })();
     }, [dispatch]);
     console.log(content?.data?.aboutInfo);

     return (
          <MainLayout pageTitle="Reach us whenever you need">
               <div className="flex justify-center px-10 border-b-2 border-primary-500 mx-10">
                    <img src={content?.data?.aboutInfo?.logo} alt={content?.data?.aboutInfo?.logo} />
               </div>
               <div className="container mx-auto my-20">
                    <h6 className="text-3xl">DlifeStyle</h6>
                    <p className="text-xl">{content?.data?.aboutInfo?.slogan}</p>
                    <p className="my-10 text-gray-500 text-md">{content?.data?.aboutInfo?.aboutText}</p>
                    <div className="flex-1 flex justify-end">
                         <button
                              className="bg-primary-500 px-5 py-2 uppercase text-white rounded-md"
                              onClick={() => navigate("contact")}
                              type="button"
                         >
                              contact us
                         </button>
                    </div>
               </div>
          </MainLayout>
     );
};
