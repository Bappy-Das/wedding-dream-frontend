import React from 'react';
import commonImage from '../../assets/husband-wife.jpg'

const CommonPageBanner = (props) => {
    return (
        <div className="bg-[url('https://i.ibb.co/c8Bsj9K/327117996-1188168058479339-7807851436597140252-n.jpg')] w-full h-[300px] bg-cover bg-center bg-no-repeat mb-8 md:h-[350px]" style={{ backgroundImage: `url(${commonImage})` }}>
            <div className='pt-40 text-3xl md:text-4xl xl:text-5xl font-bold text-center text-white' >
                {props.title}
            </div>
        </div>
    );
};

export default CommonPageBanner;