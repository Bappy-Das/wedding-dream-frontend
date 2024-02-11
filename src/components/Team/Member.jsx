import React from 'react'
import TeamSVG from './TeamSVG'

const Member = ({member}) => {
    return (
        <div className="relative m-4 rounded-lg w-[270px] min-h-[400px] overflow-hidden" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div href="#" className="group relative rounded-lg block">
                <img
                    alt="team member"
                    src={member.image}
                    className="absolute rounded-lg inset-0 h-[440px] w-full object-top opacity-75 transition-opacity group-hover:opacity-50 "
                />
                <div className="relative">
                    <div className="pt-80 py-5 px-2">
                        <div className="translate-x-8 absolute right-3 bottom-24 transform opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 duration-700">
                            <div className="text-center flex flex-col  justify-center items-center w-full m-auto">
                                <TeamSVG links={member['Social']} />
                            </div>
                        </div>
                        <div className='p-2'>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-pink-500">
                                {member.designation}
                            </p>
                            <p className="text-lg font-bold text-white">
                                {member.name}
                            </p>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>

    )
}

export default Member