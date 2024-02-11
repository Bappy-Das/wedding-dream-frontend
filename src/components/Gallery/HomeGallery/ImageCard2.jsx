import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

const Image = ({data}) => {
    return (
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="group relative w-100 border rounded-lg">
                <img className="object-cover w-full h-[256px] rounded-lg"
                    alt='p'
                    src={data?.image}
                />
                <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center  opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                    <a target="_blank" rel="noopener noreferrer" href={data?.albumLink} className="p-5 rounded-full bg-slate-200 hover:bg-yellow-400 hover:text-white bg-opacity-60 duration-300"><AiOutlinePlus /></a>
                </div>
                {/* <div className="absolute w-full bottom-2 left-16 text-white group-hover:bottom-6 duration-500 "> */}
                    {/* <p className='text-base w-full font-bold uppercase text-black'>{data?.title}</p> */}
                    <h2 className="absolute bottom-2 left-6 inline-block pt-0.5 pb-1.5 px-2 group-hover:bottom-6 duration-500 rounded-md text-sm text-gray-100 subpixel-antialiased font-medium bg-gradient-to-br from-green-500 to-blue-500 cursor-pointer">
      				    {data?.title}
      				</h2>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Image