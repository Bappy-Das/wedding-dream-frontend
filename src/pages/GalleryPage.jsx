import React from 'react'
import CommonPageBanner from '../components/CommonPageBanner/CommonPageBanner'
// import Gallery from '../components/Gallery/Gallery'
import HomeGallery from '../components/Gallery/HomeGallery/HomeGallery';

const GalleryPage = () => {
	window.scrollTo(0, 0);
	return (
		<div>
			<CommonPageBanner title={"Our Works"} />
			{/* <Gallery /> */}
			<HomeGallery />
		</div>
	)
}
export default GalleryPage
