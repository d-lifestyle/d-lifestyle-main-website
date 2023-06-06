import React from "react";
import { MainLayout } from "../../layout";

export const Contact = () => {
     return (
          <MainLayout pageTitle="Reach us whenever you need">
               <div className="grid grid-cols-12 justify-center items-center h-[90vh]">
                    <div className="col-span-12 xs:col-span-12 sm:col-span-12 md:col-span-12 xl:col-span-5 lg:col-span-5 bg-primary-300 px-5 py-20 h-full">
                         <h5 className="text-4xl font-semibold">Love to hear from you, Get in Touch</h5>
                    </div>
                    <div className="col-span-12 xs:col-span-12 sm:col-span-12 md:col-span-12 xl:col-span-6 lg:col-span-6">
                         1
                    </div>
               </div>
          </MainLayout>
     );
};
