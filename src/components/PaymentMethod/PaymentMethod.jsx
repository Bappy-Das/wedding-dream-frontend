import React from 'react';

const PaymentMethod = () => {
    return (
        <div className='bg-zinc-900'>
            <div className='relative max-w-7xl mx-auto px-4 py-4 pb-10 lg:pt-12 lg:pb-28 '>
                <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold pb-14 mt-12 lg:mt-0 text-gray-200 dark:text-gray-100'>
                    Pay Bill through Mobile Banking
                </h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 lg:pb-10'>
                    <div className='bg-red-100 dark:bg-gray-700 shadow-lg rounded-lg transform hover:translate-y-2 hover:shadow-xl transition duration-300' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className='flex py-6 px-4 items-center cursor-pointer'>
                            <div className='w-3/12'>
                                <div className='h-full w-auto rounded-md'>
                                    <img alt="Brand logo" srcSet="" src="https://nagad.com.bd/_nuxt/img/logo.a4624c6.svg" width="512" className="rounded-md h-full"/>
                                </div>
                            </div>
                            <div className='w-9/12'>
                                <h1 className='text-2xl font-semibold text-red-700 dark:text-gray-300 ml-6'>Nagad Merchant ( 01977876751 )</h1>
                                <p className='text-xs text-red-600 dark:text-gray-300 ml-6 mt-1'>Pay with your Nagad account</p>
                            </div>
                        </div>
                        {/* <div className='px-4 pt-4 pb-4 bg-white dark:bg-gray-800 rounded-md'>
                            checkbox
                            <div className='flex-shrink-0 w-10 h-10 rounded-full bg-red-600 inline-flex items-center justify-center text-white relative z-10'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4">
                                    </path>
                                </svg>
                            </div>
                            <div className='flex relative pb-3'>
                                <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
                                    <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
                                </div>
                                <div className='flex-shrink-0 w-10 h-10 rounded-full bg-red-600 inline-flex items-center justify-center text-white relative z-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                                        </path>
                                    </svg>
                                </div>
                                <p className='text-md text-gray-600 dark:text-gray-400 ml-6 mt-1'>Login to your Nagad account with your account's PIN number and tap on
                                    <span className='text-red-600 font-bold text-md'>
                                        <span className='text-red-600 font-bold text-md paybillCSS1'>"বিল পে"</span>
                                    </span>
                                    option.
                                </p>
                            </div>
                            <div className='flex relative pb-3'>
                                <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
                                    <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
                                </div>
                                <div className='flex-shrink-0 w-10 h-10 rounded-full bg-red-600 inline-flex items-center justify-center text-white relative z-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                                        </path>
                                    </svg>
                                </div>
                                <p className='text-md text-gray-600 dark:text-gray-400 ml-6 mt-1'>In
                                    <span className='text-red-600 font-bold text-md'>
                                        <span className='text-red-600 font-bold text-md paybillCSS1'>"বিল পে"</span>
                                    </span>
                                    option Enter 
                                    <span className='text-red-600 font-bold text-md'>
                                        <span className='text-red-600 font-bold text-md paybillCSS1'> 01977876751. </span>
                                    </span>
                                     Tap on it and follow the next step.
                                </p>
                            </div>
                            <div className='flex relative pb-3'>
                                <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
                                    <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
                                </div>
                                <div className='flex-shrink-0 w-10 h-10 rounded-full bg-red-600 inline-flex items-center justify-center text-white relative z-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                                        </path>
                                    </svg>
                                </div>
                                <p className='text-md text-gray-600 dark:text-gray-400 ml-6 mt-1'>Now enter your USER ID in
                                    <span className='text-red-600 font-bold text-md'>
                                        <span className='text-red-600 font-bold text-md paybillCSS1'>"কন্টাক্ট নং"</span>
                                    </span>
                                    box & input your phone number in
                                    <span className='text-red-600 font-bold text-md'>
                                        <span className='text-red-600 font-bold text-md paybillCSS1'>"কাস্টমার নাম্বার"</span>
                                    </span>
                                    box.
                                </p>
                            </div>
                            <div className='flex relative'>
                                <div className='flex-shrink-0 w-10 h-10 rounded-full bg-red-600 inline-flex items-center justify-center text-white relative z-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z">
                                        </path>
                                    </svg>
                                </div>
                                <p className='text-md text-gray-600 dark:text-gray-400 ml-6 mt-1'>After that, tap the
                                    <span className='text-red-600 font-bold text-md'>
                                        <span className='text-red-600 font-bold text-md paybillCSS1'>"পরবর্তী"</span>
                                    </span>
                                    button & proceeds the payment. You're done!
                                </p>
                            </div>
                        </div> */}
                    </div>
                    <div className='bg-red-100 dark:bg-gray-700 shadow-lg rounded-lg transform hover:translate-y-2 hover:shadow-xl transition duration-300' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className='flex items-center py-6 px-4 cursor-pointer'>
                            <div className='w-3/12'>
                                <div className='h-auto w-auto rounded-md'>
                                    <img alt="Brand logo" srcSet="" src="https://seeklogo.com/images/B/bkash-logo-FBB258B90F-seeklogo.com.png" width="512" className="rounded-md h-full"/>
                                </div>
                            </div>
                            <div className='w-9/12'>
                                <h1 className='text-2xl font-semibold text-red-700 dark:text-gray-300 ml-6'>Bkash Personal ( 01612884890 )</h1>
                                <p className='text-xs text-red-600 dark:text-gray-300 ml-6 mt-1'>Pay with your Bkash Send Money</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold pb-14 mt-10 lg:mt-0 text-gray-200 dark:text-gray-100'>
                    Pay Bill through Bank
                </h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12'>
                    <div className='bg-red-100 cursor-pointer dark:bg-gray-700 shadow-lg rounded-lg transform hover:translate-y-2 hover:shadow-xl transition duration-300' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className='flex py-6 px-4'>
                            <div className='w-3/12'>
                                <div className='h-16 w-16 rounded-md'>
                                    <img alt="Brand logo" srcSet="" src="https://play-lh.googleusercontent.com/xbBwfeUNIru5qMU0giaQIATfrt_AdMWujIhVu_M-RHG0SEVNY6lK_JQFQ_bER7k1jm8" width="512" className="rounded-md h-full"/>
                                </div>
                            </div>
                            <div className='w-9/12'>
                                <h1 className='text-2xl font-semibold text-red-700 dark:text-gray-300 ml-6'>Brac Bank</h1>
                                <p className='text-xs text-red-600 dark:text-gray-300 ml-6 mt-1'>Pay with your Brac bank account</p>
                            </div>
                        </div>
                        <div className='px-4 pt-4 pb-8 bg-white dark:bg-gray-800 rounded-md'>
                            <p className='text-md text-gray-600 dark:text-gray-400 ml-6 mt-1'>Account name: Sajjad Shaju Photography </p>
                            <p className='text-md text-gray-600 dark:text-gray-400 ml-6 mt-1'>Account no: 2055187040001</p>
                            <p className='text-md text-gray-600 dark:text-gray-400 ml-6 mt-1'>Routing no: </p>
                            <p className='text-md text-gray-600 dark:text-gray-400 ml-6 mt-1'>Branch: Rampura Branch</p>
                        </div>
                    </div>
                    <div className='bg-red-100 cursor-pointer dark:bg-gray-700 shadow-lg rounded-lg transform hover:translate-y-2 hover:shadow-xl transition duration-300' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="550">
                        <div className='flex py-6 px-4'>
                            <div className='w-3/12'>
                                <div className='h-16 w-auto rounded-md'>
                                    <img alt="Brand logo" srcSet="" src="https://www.thecitybank.com/dist/img/logo/citylogo.png" width="auto" className="rounded-md h-full"/>
                                </div>
                            </div>
                            <div className='w-9/12'>
                                <h1 className='text-2xl font-semibold text-red-700 dark:text-gray-300 ml-6'>City Bank</h1>
                                <p className='text-xs text-red-600 dark:text-gray-300 ml-6 mt-1'>Pay with your City bank account</p>
                            </div>
                        </div>
                        <div className='px-4 pt-4 pb-8 bg-white dark:bg-gray-800 rounded-md'>
                            <p className='text-md text-gray-600 dark:text-gray-400 ml-6 mt-1'>Account name: Sajjad Shaju Photography </p>
                            <p className='text-md text-gray-600 dark:text-gray-400 ml-6 mt-1'>Account no: 1502663834001</p>
                            <p className='text-md text-gray-600 dark:text-gray-400 ml-6 mt-1'>Routing no: </p>
                            <p className='text-md text-gray-600 dark:text-gray-400 ml-6 mt-1'>Branch: Banani Lake View Branch</p>
                        </div>
                    </div>
                    <div className='bg-red-100 cursor-pointer dark:bg-gray-700 shadow-lg rounded-lg transform hover:translate-y-2 hover:shadow-xl transition duration-300' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="700">
                        <div className='flex py-6 px-4'>
                            <div className='w-3/12'>
                                <div className='h-16 w-16 rounded-md'>
                                    <img alt="Brand logo" srcSet="" src="https://i.ibb.co/vhgmJY7/Premier-Bank-Limited-20171109125057-3762.png" width="100%" className="rounded-md h-full"/>
                                </div>
                            </div>
                            <div className='w-9/12'>
                                <h1 className='text-2xl font-semibold text-red-700 dark:text-gray-300 ml-6'>Premier Bank</h1>
                                <p className='text-xs text-red-600 dark:text-gray-300 ml-6 mt-1'>Pay with your Premier bank account</p>
                            </div>
                        </div>
                        <div className='px-4 pt-4 pb-8 bg-white dark:bg-gray-800 rounded-md'>
                            <p className='text-md text-gray-600 dark:text-gray-400 ml-6 mt-1'>Account name: Sajjad Shaju Photography </p>
                            <p className='text-md text-gray-600 dark:text-gray-400 ml-6 mt-1'>Account no: 013611100000429</p>
                            <p className='text-md text-gray-600 dark:text-gray-400 ml-6 mt-1'>Routing no: </p>
                            <p className='text-md text-gray-600 dark:text-gray-400 ml-6 mt-1'>Branch: Rampura Branch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;