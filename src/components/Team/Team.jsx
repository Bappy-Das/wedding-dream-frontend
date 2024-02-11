import React, { useEffect, useState } from 'react';
import Member from './Member';
import Loader from "../../components/Loader/Loader";

const Team = () => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)


	useEffect(() => {
		fetch('https://weeding-archive.onrender.com/team')
			.then(response => response.json())
			.then(data => {
				setData(data.data)
				setIsLoading(false)
			})
			.catch((e) => console.log('error', e))
	}, []);

	return (
		<section className="lg:px-24 py-10 bg-coal">
			<h2 className="container text-center lg:px-20 mx-auto text-[#E8AD8B] font-bold pl-4 text-sm uppercase">
				Our Team
			</h2>
			<h2 className="container pb-16 text-center py-4 lg:px-20 mx-auto text-gray-300 font-bold pl-4 text-lg lg:text-3xl uppercase">
				Perfect team
			</h2>

			<div className="container flex flex-col justify-center p-4 mx-auto ">
				{
					isLoading ?
						<Loader />
						:
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto">
							{data?.map((member) => <Member key={member._id} member={member} />)}
						</div>
				}
				
			</div>
		</section>
	);
};

export default Team;
