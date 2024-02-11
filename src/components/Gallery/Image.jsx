import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

const Image = ({data}) => {
    return (
        <div>
            <div className="group relative w-100">
                <img className="w-full object-cover w-100 rounded"
                    alt='p'
                    src={data.image } />
                <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center  opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                    <a className="p-5 rounded-full bg-slate-200 hover:bg-slate-400 duration-300" href="#"><AiOutlinePlus /></a>
                </div>
                <div className="absolute w-full bottom-3 left-16 text-white group-hover:bottom-7 duration-500 ">
                    <p className='text-base font-bold uppercase text-slate-200'>experiemntal</p>
                </div>
            </div>
        </div>
    )
}

export default Image