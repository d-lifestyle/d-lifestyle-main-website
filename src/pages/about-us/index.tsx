import React from "react";
import { DefaultLayout } from "../../layout";
import { useCategorySelector } from "../../slice";
import { CategoriesProps } from "../../interface";

export const AboutUsPage = () => {
     const categories = useCategorySelector();

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
                              <p className="text-gray-400 mt-3">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ut.
                              </p>
                         </div>
                    </div>
               </div>

               <div className="my-20 container mx-auto rounded-md grid grid-cols-12">
                    <div className="p-3 col-span-12 xl:col-span-6 lg:col-span-6 md:col-span-12 whitespace-pre-line">
                         <p className="text-gray-500">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsum veniam ea maiores
                              esse velit quaerat cumque voluptatibus aperiam accusamus, dolor quos repellendus,
                              veritatis possimus, commodi explicabo! Enim, ex asperiores!
                              {`\n `}
                              {`\n `}
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, incidunt! Voluptatem
                              sint consectetur sequi beatae dolorem! Recusandae, voluptatum, ex reprehenderit
                              dignissimos sunt nobis, hic quod natus itaque repellendus maxime consectetur?
                              {`\n`}
                              {`\n`}
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At eveniet rerum laborum veniam
                              doloribus quasi accusantium repudiandae debitis, reiciendis consectetur blanditiis id,
                              voluptates laudantium? Totam perferendis repudiandae atque autem? Earum ad repudiandae
                              laudantium est, soluta odio quasi non enim aperiam consequatur explicabo delectus. Officia
                              enim laboriosam quisquam error illum aliquam!
                         </p>
                    </div>
                    <div className="p-3 col-span-12 xl:col-span-6 lg:col-span-6 md:col-span-12 flex justify-center items-center w-full">
                         <img src="https://dummyimage.com/400x400/000/fff" className="rounded-full" alt="" />
                    </div>
               </div>
               <div className="text-center my-20 container mx-auto">
                    <h5 className="text-3xl font-semibold uppercase text-primary-500">Our clients</h5>
                    <div className="grid grid-cols-12 gap-5 items-center mt-10">
                         <div className="col-span-12 sm:col-span-6 xs:col-span-6 md:col-span-6 lg:col-span-2 xl:col-span-2">
                              <img src="https://dummyimage.com/400x400/000/fff" className="rounded-full" alt="" />
                         </div>
                         <div className="col-span-12 sm:col-span-6 xs:col-span-6 md:col-span-6 lg:col-span-2 xl:col-span-2">
                              <img src="https://dummyimage.com/400x400/000/fff" className="rounded-full" alt="" />
                         </div>
                         <div className="col-span-12 sm:col-span-6 xs:col-span-6 md:col-span-6 lg:col-span-2 xl:col-span-2">
                              <img src="https://dummyimage.com/400x400/000/fff" className="rounded-full" alt="" />
                         </div>
                         <div className="col-span-12 sm:col-span-6 xs:col-span-6 md:col-span-6 lg:col-span-2 xl:col-span-2">
                              <img src="https://dummyimage.com/400x400/000/fff" className="rounded-full" alt="" />
                         </div>
                         <div className="col-span-12 sm:col-span-6 xs:col-span-6 md:col-span-6 lg:col-span-2 xl:col-span-2">
                              <img src="https://dummyimage.com/400x400/000/fff" className="rounded-full" alt="" />
                         </div>
                         <div className="col-span-12 sm:col-span-6 xs:col-span-6 md:col-span-6 lg:col-span-2 xl:col-span-2">
                              <img src="https://dummyimage.com/400x400/000/fff" className="rounded-full" alt="" />
                         </div>
                         <div className="col-span-12 sm:col-span-6 xs:col-span-6 md:col-span-6 lg:col-span-2 xl:col-span-2">
                              <img src="https://dummyimage.com/400x400/000/fff" className="rounded-full" alt="" />
                         </div>
                    </div>
               </div>
               {categories.data.length !== 0 && (
                    <div className="text-center my-20 container mx-auto">
                         <h5 className="text-3xl font-semibold uppercase text-primary-500">services provided by us!</h5>
                         <div className="grid grid-cols-12 gap-5 items-center justify-center mt-10">
                              {categories.data.map(({ name }: CategoriesProps) => (
                                   <div className="col-span-12 sm:col-span-6 xs:col-span-6 md:col-span-6 lg:col-span-2 xl:col-span-2 bg-primary-100 py-3 rounded-md cursor-pointer group hover:shadow-md">
                                        <p className="uppercase text-md font-semibold group-hover:text-secondary-500 ">
                                             {name}
                                        </p>
                                   </div>
                              ))}
                         </div>
                    </div>
               )}
          </DefaultLayout>
     );
};
