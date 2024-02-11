import React from 'react'
import CommonPageBanner from '../components/CommonPageBanner/CommonPageBanner'
import Pricing from '../components/Pricing/Pricing'

const PackagesPage = () => {
	window.scrollTo(0, 0);
	return (
		<div>
			<CommonPageBanner title={"Our Packages"} />
			<Pricing />
		</div>
	)
}

export default PackagesPage
