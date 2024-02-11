import React from 'react';
import './PackageCard.css'
import { BsCheckCircle } from "react-icons/bs";
const PackageCard = ({itemDetails }) => {
    return (
        <div className="body" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <div className="outer-border">
          <div className="mid-border bg-[#3C3D3F] hover:bg-[#656668] duration-300 p-4">
              <div className="inner-border">
                <img className="corner-decoration corner-left-top" src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg" alt='p'/>
                <img className="corner-decoration corner-right-top" src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg" alt='p'/>
                <img className="corner-decoration corner-right-bottom" src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg" alt='p'/>
                <img className="corner-decoration corner-left-bottom" src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg" alt='p'/>
                {/* <img className="vertical-decoration top" src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png" alt='p'/> */}
                {/* <img className="vertical-decoration bottom" src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png" alt='p'/> */}

              <div className="container py-8">
                <div className='text-center mt-5'>
                    <h1 className="text-lg h-20 md:text-xl text-[#E8AD8B] font-extrabold tracking-wide capitalize">
                        {itemDetails?.name}
                    </h1>
                </div>
                {/* #E8AD8B */}
                <div className='pb-14'>
                  <ul className="flex-1  space-y-2">
                      <li className="flex items-center text-sm md:text-lg lg:text-xl space-x-2 text-[#E8AD8B] font-semibold">
                          <BsCheckCircle />
                          <span className="text-white">Photographer : {itemDetails?.photographerQuantity} </span>
                      </li>
                      <li className="flex items-center text-sm md:text-lg lg:text-xl space-x-2 text-[#E8AD8B] font-semibold">
                          <BsCheckCircle />
                          <span className="text-white">Cinematographer: {itemDetails?.cinematographerQuantity} </span>
                      </li>
                      <li className="flex items-center text-sm md:text-lg lg:text-xl space-x-2 text-[#E8AD8B] font-semibold">
                          <BsCheckCircle />
                          <span className="text-white">Trailer Duration: {itemDetails?.trailerLength} Minutes</span>
                      </li>
                      <li className="flex items-center text-sm md:text-lg lg:text-xl space-x-2 text-[#E8AD8B] font-semibold">
                          <BsCheckCircle />
                          <span className="text-white">Event Duration: {itemDetails?.duration} Hours</span>
                      </li>
                      <li className="flex items-center text-sm md:text-lg lg:text-xl space-x-2 text-[#E8AD8B] font-semibold">
                          <BsCheckCircle />
                          <span className="text-white">Printed Picture: {itemDetails?.printedPicture} </span>
                      </li>
                  </ul>
                </div>
                {/* <div className="mt-5 text-center">
                    <p className="pr-5 text-xl md:text-3xl text-amber-500 mb-4 font-semibold">{itemDetails?.price}BDT</p>
                </div> */}
                      
                  {/* <div className="row social-row">
                    <a href="#" target="_blank" className="d-none" style={{ backgroundImage: 'url(https://i.ibb.co/k0JQYv4/instagram-social-button.png)' }}></a>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <img className="logo" src="https://i.ibb.co/J2tzs0F/five-bells-logo.png" alt="Five Bells logo" />
                      <h1 className="text-uppercase white-text countach">Multiple borders vintage frame</h1>
                      <p className="lead skintone-text">
                        <span className="name skintone-text countach">Add your own washed</span>
                        <span className="place skintone-text tilda-petite">Creative Logo</span>
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default PackageCard;