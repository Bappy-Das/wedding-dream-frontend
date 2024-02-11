import React from 'react';
import CommonPageBanner from '../components/CommonPageBanner/CommonPageBanner';
import Contact from '../components/Contact/Contact'

const ContactPage = () => {
	window.scrollTo(0, 0);
	return (
		<div>
			<CommonPageBanner title={"Contact"} subtitle={"Tis is contact us page" } />
			<Contact />
		</div>
	);
};

export default ContactPage;