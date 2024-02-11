import React, { useEffect, useState } from 'react';
// import Loader from "../../components/Loader/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import { Link } from 'react-router-dom';
import PackageCard from './PackageCard/PackageCard';

const Pricing = () => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)


	useEffect(() => {
		fetch('https://weeding-archive.onrender.com/package')
			.then(response => response.json())
			.then(data => {
				setData(data.data)
				setIsLoading(false)
			})
			.catch((e) => console.log('error', e))
	}, []);

	return (
		<section className="bg-coal px-5 md:px-24">
			<div className="container mx-auto pb-20 text-gray-100">
				{/* <div className="container grid grid-cols-1 gap-6 py-4  md:grid-cols-2 mx-auto  text-gray-300 font-medium text-left pl-4 text-lg uppercase pb-14">
					<div>Our Packages</div>
				</div> */}
				<h2 className="container text-center lg:px-20 mx-auto text-[#E8AD8B] font-bold pl-4 text-sm uppercase">
					Our Packages
				</h2>
				<h2 className="container pb-20 text-center py-4 lg:px-20 mx-auto text-gray-300 font-bold pl-4 text-lg lg:text-3xl uppercase">
					Packages We Offer
				</h2>
				<div className="container px-4 mx-auto">
					{
						isLoading ?
							// <Loader />
							<Swiper
      							slidesPerView={1}
      							spaceBetween={10}
      							pagination={{
      							clickable: true,
								}}
								// loop={true}
								autoplay={{
								delay: 2500,
								disableOnInteraction: false,
								}}

      							breakpoints={{
      							  640: {
      							    slidesPerView: 1,
      							    spaceBetween: 10,
      							  },
      							  768: {
      							    slidesPerView: 1,
      							    spaceBetween: 10,
      							  },
      							  1024: {
      							    slidesPerView: 2,
      							    spaceBetween: 10,
      							  },
      							}}
      							  	navigation={true}
            						modules={[Autoplay, Pagination, Navigation]}
      							  	className="mySwiper"
									>
									<SwiperSlide>
										<div role="status" className="w-100 p-4 space-y-4 border-2 border-[#DE9B72] divide-y divide-gray-200 rounded-2xl shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
										    <div className="flex items-center justify-between">
										        <div>
										            <div className="w-72 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></div>
										        </div>
										    </div>
										    <div className="flex items-center justify-between pt-4">
										        <div>
										            <div className="w-56 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
										        </div>
										    </div>
										    <div className="flex items-center justify-between pt-4">
										        <div>
										            <div className="w-56 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
										        </div>
										    </div>
										    <div className="flex items-center justify-between pt-4">
										        <div>
										            <div className="w-56 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
										        </div>
										    </div>
										    <div className="flex items-center justify-between pt-4">
										        <div>
										            <div className="w-56 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
										        </div>
										    </div>
										    <div className="flex items-center justify-between pt-4">
										        <div>
										            <div className="w-56 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
										        </div>
										    </div>
										</div>
      							    </SwiperSlide>
									<SwiperSlide>
										<div role="status" className="w-100 p-4 space-y-4 border-2 border-[#DE9B72] divide-y divide-gray-200 rounded-2xl shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
										    <div className="flex items-center justify-between">
										        <div>
										            <div className="w-72 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></div>
										        </div>
										    </div>
										    <div className="flex items-center justify-between pt-4">
										        <div>
										            <div className="w-56 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
										        </div>
										    </div>
										    <div className="flex items-center justify-between pt-4">
										        <div>
										            <div className="w-56 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
										        </div>
										    </div>
										    <div className="flex items-center justify-between pt-4">
										        <div>
										            <div className="w-56 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
										        </div>
										    </div>
										    <div className="flex items-center justify-between pt-4">
										        <div>
										            <div className="w-56 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
										        </div>
										    </div>
										    <div className="flex items-center justify-between pt-4">
										        <div>
										            <div className="w-56 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
										        </div>
										    </div>
										</div>
      							    </SwiperSlide>
									<SwiperSlide>
										<div role="status" className="w-100 p-4 space-y-4 border-2 border-[#DE9B72] divide-y divide-gray-200 rounded-2xl shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
										    <div className="flex items-center justify-between">
										        <div>
										            <div className="w-72 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></div>
										        </div>
										    </div>
										    <div className="flex items-center justify-between pt-4">
										        <div>
										            <div className="w-56 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
										        </div>
										    </div>
										    <div className="flex items-center justify-between pt-4">
										        <div>
										            <div className="w-56 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
										        </div>
										    </div>
										    <div className="flex items-center justify-between pt-4">
										        <div>
										            <div className="w-56 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
										        </div>
										    </div>
										    <div className="flex items-center justify-between pt-4">
										        <div>
										            <div className="w-56 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
										        </div>
										    </div>
										    <div className="flex items-center justify-between pt-4">
										        <div>
										            <div className="w-56 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
										        </div>
										    </div>
										</div>
      							    </SwiperSlide>
								
      						</Swiper>
							:
							<Swiper
      							slidesPerView={1}
      							spaceBetween={10}
      							pagination={{
      							clickable: true,
								}}
								// loop={true}
								autoplay={{
								delay: 2500,
								disableOnInteraction: false,
								}}

      							breakpoints={{
      							  640: {
      							    slidesPerView: 1,
      							    spaceBetween: 10,
      							  },
      							  768: {
      							    slidesPerView: 1,
      							    spaceBetween: 10,
      							  },
      							  1024: {
      							    slidesPerView: 3,
      							    spaceBetween: 10,
      							  },
      							}}
      							  	navigation={true}
            						modules={[Autoplay, Pagination, Navigation]}
      							  	className="mySwiper"
									>
									{data?.map((item, index) => <SwiperSlide key={index} className="pb-14 overflow-hidden">
										<Link to={`/package/${item._id}`} >
											<PackageCard itemDetails={item}></PackageCard>
										</Link>
      							    </SwiperSlide>
								)}
      						</Swiper>
					}
					
				</div>
			</div>
		</section>
	);
};

export default Pricing;
