import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Review = ({singleReview}) => {
    return (
        <section>
            <div className="flex flex-col items-center justify-center p-5">
                <div className="md:w-2/3 lg:w-2/3 shadow-md border bg-gray-100 p-6 rounded-md group my-20">
                    <div className='flex flex-col justify-center items-center mb-10'>
                        <img className='h-16 w-16 rounded-full' src={singleReview.image} alt="" srcSet="" />
                        <p className='text-sm font-semibold mt-5'>{singleReview.user}</p>
                    </div>
                    <div className="basis-2/3 mb-1 text-sm text-center font-medium text-gray-900" >
                        <FaQuoteLeft className="inline" />  {singleReview.text}  <FaQuoteRight className="inline" />
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default Review;