/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Info from '../Info/Info'

const Footer = () => {
  return (
    <footer className="bg-coal text-gray-200 body-font  md:px-24" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <Info />
      <div className="container px-5 md:px-24  py-16 mx-auto flex items-center sm:flex-row flex-col">
        <div className='font-light text-gray-500'>
          <span className='text-sm font-semibold'>All Right Reserved &copy; Sajjad Shaju Photography: Wedding Archives</span>
          <p className='font-light text-gray-500 text-xs'>Developed By <a className='text-white font-bold' target="_blank" href="https://bappy.netlify.app/" rel="noreferrer">Bappy Das</a> </p>
          </div>
        
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500 cursor-pointer" href="https://www.facebook.com/shajuphy/" target="_blank" rel="noreferrer">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500 cursor-pointer" href="https://www.facebook.com/shajuphy/" target="_blank" rel="noreferrer">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500 cursor-pointer" href="https://www.facebook.com/shajuphy/" target="_blank" rel="noreferrer">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500 cursor-pointer" href="https://www.facebook.com/shajuphy/" target="_blank" rel="noreferrer">
            <svg  viewBox="0 0 1024 1024"  fill="currentColor"  height="20"  width="20">
              <path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer