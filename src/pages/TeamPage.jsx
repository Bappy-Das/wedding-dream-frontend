import React from 'react'
import CommonPageBanner from '../components/CommonPageBanner/CommonPageBanner'
import Team from '../components/Team/Team'

const TeamPage = () => {
	window.scrollTo(0, 0);
	return (
		<div>
			<CommonPageBanner title={"Team"} />
			<Team />
		</div>
	)
}

export default TeamPage
