import React, { useEffect, useState } from 'react';

const About = () => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		fetch('https://weeding-archive.onrender.com/quote')
			.then(response => response.json())
			.then(data => {
				setData(data.data)
				setIsLoading(false)
			})
			.catch((e) => console.log('error', e))
	}, []);
	return (
		<section className="bg-coal dark:bg-coal py-32 px-5">
			<div className="lg:flex lg:items-center justify-center">
				<div className='lg:w-1/2 lg:p-12' data-aos="zoom-in-right">
					<img
						className="object-cover object-center  w-full h-80 lg:h-[36rem]"
						src={data[0]?.image}
						style={{ borderRadius:'25px'}}
						alt=""
					/>
				</div>
				<div className="mt-8 lg:w-96 lg:px-6 lg:mt-0 lg:relative" data-aos="zoom-in-left">
					<p className="text-xl italic font-semibold text-gray-300 mb-10">
						“{data[0]?.text }”
					</p>
					<p className="lg:w-56 text-justify text-gray-500 dark:text-gray-400 ">
						___{data[0]?.author}
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
