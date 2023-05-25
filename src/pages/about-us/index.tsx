import { DefaultLayout } from "../../layout";
import { CategoriesProps } from "../../interface";
import { useCategorySelector, useGeneralSelector } from "../../features/slice";

export const AboutUsPage = () => {
     const categories = useCategorySelector();
     const general = useGeneralSelector();

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
                              <p className="text-gray-400 mt-3">{general?.content.aboutInfo.slogan}</p>
                         </div>
                    </div>
               </div>

               <div className="my-20 container mx-auto rounded-md grid grid-cols-12">
                    <div className="p-3 col-span-12 xl:col-span-6 lg:col-span-6 md:col-span-12 whitespace-pre-line">
                         <p className="text-gray-500">{general?.content.aboutInfo.aboutText}</p>
                    </div>
                    <div className="p-3 col-span-12 flex-col xl:col-span-6 lg:col-span-6 md:col-span-12 flex justify-center items-center w-full">
                         <img src={general?.content.aboutInfo.logo} className="rounded-full" alt="" />
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
                              {categories.data.map(({ name }: CategoriesProps, i) => (
                                   <div
                                        key={i}
                                        className="col-span-12 sm:col-span-6 xs:col-span-6 md:col-span-6 lg:col-span-2 xl:col-span-2 bg-primary-100 py-3 rounded-md cursor-pointer group hover:shadow-md"
                                   >
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
