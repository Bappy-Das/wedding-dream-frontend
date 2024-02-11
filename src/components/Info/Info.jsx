import React from 'react'
import { GoMailRead } from "react-icons/go";
import { MdPhonelinkRing,MdLocationOn } from "react-icons/md";

const Info = () => {
    return (
        <div className='bg-coal px-10 border-b border-gray-700 '>
            <div className="container m-auto pt-16 pb-10 text-gray-300 border-b-1">
                <div className="flex flex-wrap justify-between items-center gap-y-10 md:gap-y-1">
                    <div className='text-center flex-1 basis-60'>
                        <div className='flex flex-col justify-center items-center py-3'><GoMailRead size={40} /></div>
                        <h3 className='font-bold after-border pb-4 mb-2'>SEND EMAIL</h3>
                        <div className='font-light text-gray-500'>sajjadshajuphotography@gmail.com</div>
                    </div>
                    <div className='text-center lg:border-l lg:border-r border-gray-700 flex-1 basis-60 h-32'>
                        <div className='flex flex-col justify-center items-center py-3'><MdPhonelinkRing size={40} /></div>
                        <h3 className='font-bold after-border pb-4 mb-2'>CALL US</h3>
                        <div className='font-bold text-gray-500 text-xl'>+8801612-884890</div>
                    </div>
                    <div className='text-center flex-1 basis-60'>
                        <div className='flex flex-col justify-center items-center py-3'><MdLocationOn size={40} /></div>
                        <h3 className='font-bold after-border pb-4 mb-2'>VISIT US</h3>
                        <div className='font-light text-gray-500'>1/B West Hajipara, Rampura,</div>
                        <div className='font-light text-gray-500'>Dhaka 1219, Bangladesh</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info