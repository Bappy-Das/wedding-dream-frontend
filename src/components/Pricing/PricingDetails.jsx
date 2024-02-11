import React, { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";
import CommonPageBanner from "../CommonPageBanner/CommonPageBanner";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import BookingModal from "./BookingModal";
import Loader from "../../components/Loader/Loader";


const PricingDetails = () => {
    // setTimeout(() => {
    //     window.scrollTo(0, 0);
    //   }, 0);
    // window.scrollTo(0, 0);
    const { id } = useParams();
    const [data, setData] = useState([]);
    let [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true)


    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }
    useEffect(() => {
        fetch("https://weeding-archive.onrender.com/package")
            .then((response) => response.json())
            .then((data) => {
                setData(data.data)
                setIsLoading(false)
            })
            .catch((e) => console.log("error", e));
    }, [data]);
    const singlePackage = data.filter((item) => item._id === id);
    // window.scrollTo(0, 0);
    return (
        <>
            <CommonPageBanner title={"Booking Details"} subtitle={"Tis is price details page"} />
            {
                isLoading ?
                    <Loader />
                    // <section className="bg-neutral-900px-5 md:px-24">
                    //     <div className="mx-auto px-4 w-full  text-white ">
                    //         <div className="mx-auto w-100  grid grid-cols-2 gap-x-20">
                    //             <div className="col-span-full lg:col-span-1 relative rounded-lg pb-10">
                    //                 <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                    //                     <div className="flex items-center justify-center w-full h-80 bg-gray-300 rounded-lg  dark:bg-gray-700">
                    //                         <svg className="w-full h-20 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    //                             <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    //                         </svg>
                    //                     </div>
                    //                 </div>
                    //             </div>
                    //             <div className="col-span-full lg:col-span-1 relative rounded-lg pb-10">
                    //                 <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                    //                     <div className="w-full">
                    //                         <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700  mb-4"></div>
                    //                         <div className="w-[40%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-4"></div>
                    //                         <div className="w-[60%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 mb-5"></div>
                    //                         <div className="w-[80%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-4"></div>
                    //                         <div className="w-[80%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-4"></div>
                    //                         <div className="w-[40%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-4"></div>
                    //                         <div className="w-[50%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-4"></div>
                    //                         <div className="w-[60%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-4"></div>
                    //                     </div>
                    //                 </div>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </section>
                    :
                    <section className="bg-neutral-900px-5 md:px-24">
                        <div className="mx-auto px-4 w-full max-w-7xl  text-white ">
                            <div className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-2 gap-x-20">
                                <div className=" col-span-full lg:col-span-1 relative rounded-lg pb-10" data-aos="zoom-in-right">
                                    <img
                                        src={singlePackage[0]?.image}
                                        alt={singlePackage.name}
                                        className="object-contain w-full h-full rounded-2xl"
                                    />
                                </div>
                                <div className="col-span-full lg:col-span-1 lg:max-w-xl flex flex-col items-start" data-aos="zoom-in-left">
                                    <h1 className="text-2xl md:text-3xl text-gray-400 font-extrabold tracking-wide capitalize">
                                        {singlePackage[0]?.name}
                                    </h1>
                                    <div className="mt-5 flex items-center">
                                        <p className="pr-5 text-xl md:text-3xl text-amber-500 mb-4 font-semibold">{` ${singlePackage[0]?.price}`} BDT</p>
                                    </div>
                                    <div>
                                        <p className="pr-8 leading-relaxed text-xl md:2xl pb-3">You'll get the following features</p>
                                        <ul className="flex-1 pr-8 space-y-2">
                                            <li className="flex items-center text-sm md:text-lg space-x-2 text-amber-300">
                                                <BsCheckCircle />
                                                <span className="text-stone-300">Number Of Photographer : {singlePackage[0]?.photographerQuantity} </span>
                                            </li>
                                            <li className="flex items-center text-sm md:text-lg  space-x-2 text-amber-300">
                                                <BsCheckCircle />
                                                <span className="text-stone-300">Number Of Cinematographer: {singlePackage[0]?.cinematographerQuantity} </span>
                                            </li>
                                            <li className="flex items-center text-sm md:text-lg  space-x-2 text-amber-300">
                                                <BsCheckCircle />
                                                <span className="text-stone-300">Trailer Duration: {singlePackage[0]?.trailerLength} Minutes</span>
                                            </li>
                                            <li className="flex items-center text-sm md:text-lg  space-x-2 text-amber-300">
                                                <BsCheckCircle />
                                                <span className="text-stone-300">Event Duration: {singlePackage[0]?.duration} Hours</span>
                                            </li>
                                            <li className="flex items-center text-sm md:text-lg  space-x-2 text-amber-300">
                                                <BsCheckCircle />
                                                <span className="text-stone-300">Printed Picture: {singlePackage[0]?.printedPicture} </span>
                                            </li>
                                        </ul>

                                        <p className="pr-8 leading-relaxed text-sm md:text-lg  pt-5 pb-3"> ✅ {singlePackage[0]?.photographerQuantity} Senior Photographer & {singlePackage[0]?.cinematographerQuantity} Senior Cinematographer Will Cover the Event.</p>
                                        <p className="pr-8 leading-relaxed text-sm md:text-lg  pb-3"> ✅ Full HD Recording up to 4-5 Hours Video coverage</p>
                                        <p className="pr-8 leading-relaxed text-sm md:text-lg  pb-3">✅ Cinematic Trailer around 2-3 minutes & Full Video Around 20-30 minutes add in Some favorite songs of your choice</p>
                                        <p className="pr-8 leading-relaxed text-sm md:text-lg  pb-3">✅ Edited Pictures Maximun & You will get 100 Copies 4R, with 1 Pocket photo Albam</p>
                                    </div>
                                    <p className="mt-10 text-sm text-gray-500 font-medium">{singlePackage[0]?.description}</p>
                                    <button onClick={openModal} type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-emerald-400 rounded-md group-hover:bg-opacity-0 text-bold">
                                         Book Now
                                      </span>
                                    </button>
                                    <BookingModal packageDetails={singlePackage[0]} isOpen={isOpen} closeModal={closeModal} />
                                </div>
                            </div>
                        </div>
                    </section>
            }
            <PaymentMethod></PaymentMethod>
        </>
    );
};

export default PricingDetails;
