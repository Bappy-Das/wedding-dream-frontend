import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import './VideoGallery.css'
import Loader from "../../../components/Loader/Loader";
const VideoGallery = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch('https://weeding-archive.onrender.com/video')
			.then(response => response.json())
      .then(data => {
        setData(data.data)
        setIsLoading(false)
      })
			.catch((e) => console.log('error', e))
	}, []);

	return ( 
		<section className="py-4 md:py-10 bg-coal dark:text-gray-50">
			<h2 className="container grid grid-cols-2 gap-6 py-4 lg:px-20 mx-auto md:grid-cols-3 text-gray-300 font-bold text-left pl-4 text-lg uppercase pb-8">
				Cinematography
      </h2>
      {
        isLoading ?
          <Loader />
          :
          // <div className="container grid grid-cols-1 gap-6 py-4 lg:px-20 mx-auto px-5  md:px-16 md:grid-cols-3">
					// 	{data?.map(itm => <ImageCard2 data={itm} />)}
					// </div>
          <div className="container grid grid-cols-1 gap-6 py-4 lg:px-20 mx-auto px-5  md:px-16 md:grid-cols-3">
            {data?.map(itm => <VideoCard data={itm} />)}
			    </div>
      }
			
		</section>
	);
};

export default VideoGallery;