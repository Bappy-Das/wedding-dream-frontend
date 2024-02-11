import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Review from "./Review/Review"
// import { HiOutlineSearch } from "react-icons/hi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";


const Reviews = () => {
  const [reviews, setReview] = useState();
	// const [data, setData] = useState([])

	useEffect(() => {
		fetch('https://weeding-archive.onrender.com/testimonial')
			.then(response => response.json())
			.then(data => setReview(data.data))
			.catch((e) => console.log('error', e))
	}, []);

  return (
    <section>
      <div className="bg-coal reviews">
        <div className="container mx-auto md:px-4 lg:px-4 py-10">
			    <h2 className="container text-center py-4 lg:px-20 mx-auto text-[#E8AD8B] font-bold pl-4 text-lg lg:text-3xl uppercase">
			    {/* <h2 className="container text-center py-4 lg:px-20 mx-auto text-yellow-600 font-bold pl-4 text-lg lg:text-3xl uppercase"> */}
              WHAT PEOPLE SAY
			    </h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
              },
              "@1.50": {
                slidesPerView: 1,
              },
              "@1.75": {
                slidesPerView: 1,
              },
            }}
          >

            {
              reviews?.map((singleReview, index) => <SwiperSlide key={index} className="py-5">
                <Review singleReview={singleReview} />
              </SwiperSlide>
              )
            }
          </Swiper>
        </div>
      </div>
    </section>

  );
};

export default Reviews;
