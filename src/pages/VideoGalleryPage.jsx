import React from 'react'
import CommonPageBanner from '../components/CommonPageBanner/CommonPageBanner'
import VideoGallery from '../components/Gallery/VideoGallery/VideoGallery';

const VideoGalleryPage = () => {
	window.scrollTo(0, 0);
	return (
		<div>
			<CommonPageBanner title={"Our Works"} />
			<VideoGallery />
		</div>
	)
}
export default VideoGalleryPage
