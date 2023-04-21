import React from "react";
import { DefaultLayout } from "../../layout";

export const AboutUsPage = () => {
     return (
          <DefaultLayout pageTitle="Best travel agency in India">
               <div
                    style={{
                         backgroundImage: `url(https://images.pexels.com/photos/14715105/pexels-photo-14715105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
                         height: "70vh",
                         backgroundPosition: "center",
                         backgroundSize: "cover",
                         backgroundAttachment: "fixed",
                    }}
               >
                    <div className="bg-gray-900 bg-opacity-50 w-full h-full flex justify-center items-center">
                         <div className="text-center">
                              <h6 className="text-white uppercase text-4xl font-semibold">DLifestyle</h6>
                              <p className="text-gray-400">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ut.
                              </p>
                         </div>
                    </div>
               </div>

               <div className="my-20 container mx-auto rounded-md gap-3 grid grid-cols-12">
                    <div className="p-3 border-2 border-gray-500 col-span-12 xl:col-span-6 lg:col-span-6 md:col-span-12">
                         1
                    </div>
                    <div className="p-3 col-span-12 xl:col-span-6 lg:col-span-6 md:col-span-12 border-2 border-gray-500">
                         1
                    </div>
               </div>
          </DefaultLayout>
     );
};
