import React from 'react'
// import hero from "../../assets/311634251_2178888665651407_1413025571303879858_n.jpg";
// import bannerBG from "../../assets/banngerBG.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";
import { useState,useEffect } from "react";
const Hero = ({ cover }) => {
    const [isMobile, setIsMobile] = useState(false);  
    const handleResize = () => {
        if (document.body.clientWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }
    useEffect(() => {
      window.addEventListener("resize", handleResize ,false);
    }, []);

    return (
        <section id='hero-div' className="bg-coal text-gray-200 body-font">
            <div className="text-center">
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
                    modules={[Autoplay, Pagination]}
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
                    {cover.map((item) => (
                        <SwiperSlide key={item._id} className="pb-24 overflow-hidden">
                            {
                                isMobile ? 
                                <div>
                                <img className="object-cover md:object-contain  md:min-h-screen w-full h-[300px] rounded-lg"
                                    alt='p'
                                    src={item.image[0]}
                                />
                            </div>
                                    
                                    :
                                    <div className="relative object-cover w-full min-h-screen md:pb-0 pt-28 bg-cover"
                                            style={{ backgroundImage: `url(${item.image[0]})`,backgroundPosition: "center center" }}>
                                        <div className="container mx-auto grid md:grid-cols-2 xs:grid-cols-1 content-center absuolute"></div>
                                    </div>
                            }
                            
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Hero;
