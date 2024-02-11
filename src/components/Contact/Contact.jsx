import React from 'react';
// import Map from '../Map/Map';
const Contact = () => {
	return (
		<section className=" bg-coal dark:text-gray-50  py-20" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
			<h2 className="container pb-28 text-center py-4 lg:px-20 mx-auto text-white font-bold pl-4 text-lg lg:text-3xl uppercase">
              Contact Information
			</h2>
			<div className="mapouter">
				<div className="gmap_canvas">
					<iframe className='rounded-lg' width="100%" height="510" id="gmap_canvas" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sajjad%20Shaju%20Photography:%20Wedding%20Archives,%20dhaka+(Sajjad%20Shaju%20Photography:%20Wedding%20Archives)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="Google map iframe titile"></iframe>
				</div>
			</div>
			{/* GoogleMap Start */}
				{/* <Map/> */}
        	{/* GoogleMap End*/}
		</section>
	);
};

export default Contact;
