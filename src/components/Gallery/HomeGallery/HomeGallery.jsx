import React, { useEffect, useState } from 'react';
// import ImageCa '../ImageCard2';
// import Image from './Image';
import ImageCard2 from './ImageCard2'
// import Loader from "../../../components/Loader/Loader";

const HomeGallery = () => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		// http://localhost:5000/
		fetch('https://weeding-archive.onrender.com/gallery')
			.then(response => response.json())
			.then(data => {
				setData(data.data)
				setIsLoading(false)
			})
			.catch((e) => console.log('error', e))
	}, []);

	return ( 
		<section className="py-4 md:py-10 bg-coal dark:text-gray-50">
			<h2 className="container text-center lg:px-20 mx-auto text-[#E8AD8B] font-bold pl-4 text-sm uppercase">
				Our Portfolio
			</h2>
			<h2 className="container pb-20 text-center py-4 lg:px-20 mx-auto text-gray-300 font-bold pl-4 text-lg lg:text-3xl uppercase">
				Browse Our Latest Work
			</h2>
			<div>
				
			</div>
			{
				isLoading ?
					// <Loader />
					<div className="container grid grid-cols-1 gap-6 py-4 lg:px-20 mx-auto px-5  md:px-16 md:grid-cols-3">
						<div role="status" className="flex items-center justify-center h-56 w-100 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
							<svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
						    	<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
						    	<path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
						  	</svg>
						</div>  
						<div role="status" className="flex items-center justify-center h-56 w-100 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
							<svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
						    	<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
						    	<path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
						  	</svg>
						</div>  
						<div role="status" className="flex items-center justify-center h-56 w-100 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
							<svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
						    	<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
						    	<path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
						  	</svg>
						</div>  
						<div role="status" className="flex items-center justify-center h-56 w-100 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
							<svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
						    	<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
						    	<path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
						  	</svg>
						</div>  
						<div role="status" className="flex items-center justify-center h-56 w-100 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
							<svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
						    	<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
						    	<path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
						  	</svg>
						</div>  
						<div role="status" className="flex items-center justify-center h-56 w-100 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
							<svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
						    	<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
						    	<path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
						  	</svg>
						</div>  
					</div>
					: 
					<div className="container grid grid-cols-1 gap-6 py-4 lg:px-20 mx-auto px-5  md:px-16 md:grid-cols-3">
						{data?.map(itm => <ImageCard2 key={itm._id} data={itm} />)}
					</div>
					
			}
		</section>
	);
};

export default HomeGallery;