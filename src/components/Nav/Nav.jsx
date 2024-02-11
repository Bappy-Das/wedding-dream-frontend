import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/ssp-logo.png'
import logowhite from '../../assets/ssp-logo-white.png'
import './Nav.css'

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [changeHeader, setChangeHeader] = useState(false);
	//header change function
	const onChangeHeader = () => {
		if (window.scrollY >= 50) {
			setChangeHeader(true);
		} else {
			setChangeHeader(false);
		}
	};
	//change header by scrolling
	window.addEventListener("scroll", onChangeHeader);

	return (
		<div className='relative'>
			
			<div className={
			changeHeader
				?
				"bg-slate-900 w-screen py-2 text-white body-font z-50 top-0 left-0 shadow-md transition duration-500 fixed"
				:
				"bg-coal bg-opacity-50 w-screen py-2 text-white body-font z-50 top-0 left-0 shadow-md transition duration-500 fixed"
				// "bg-opacity-50 w-full py-2 bg-coal text-white z-50 body-font shadow-md transition duration-500 fixed top-0"
		}>
			<header className='container px-12  mx-auto'>
				<div className="container mx-auto flex justify-between items-center">
					{/* ::Site logo and Name */}
					<Link
						to="/"
						className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
					>
						<img className='w-[70px] h-full transition duration-500' src={changeHeader?logowhite: logo} alt="" srcSet="" />
					</Link>

					{/* ::Navbar */}
					<nav className="hidden md:mr-auto uppercase md:ml-4 md:pl-4 md:flex flex-wrap items-center justify-end w-full text-sm font-normal tracking-wide">
						<Link to="/" className="mr-8 hover:text-gray-300">
							Home
						</Link>

						<div className="group relative">
							<div className="inline-flex cursor-pointer items-center group mr-8 hover:text-gray-300">
							  <span className="mr-1">Galleries</span>
							  <svg	className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"	xmlns="http://www.w3.org/2000/svg"	viewBox="0 0 20 20">
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							  </svg>
							</div>

							{/* menu list */}
							<div className="absolute hidden text-gray-700 pt-1 group-hover:block w-40 bg-gray-200 rounded-lg">
								<div className="py-2 px-2 cursor-pointer hover:ps-5 hover:text-sky-400 font-semibold rounded-lg">
									<Link to="/gallery">Images</Link>
							  	</div>
							  	<div className="py-2 px-2 cursor-pointer hover:text-sky-400 font-semibold rounded-lg">
								  <Link to="/cinematography">Videos</Link>
							  	</div>
							</div>

  						</div>
						<Link to="/packages" className="mr-8 hover:text-gray-300">
							Packages
						</Link>
						<Link to="/team" className="mr-8 hover:text-gray-300">
							Team
						</Link>
						<Link to="/contact" className="mr-8 hover:text-gray-300">
							Contact
						</Link>
					</nav>
					
					{/* ::Burger icon standard */}
					<button
						className="md:hidden rounded-md"
						onClick={() => setIsOpen(!isOpen)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-yellow-500 hover:to-red-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</header>

			{/* :MOBILE MENU */}
			{isOpen && (
				<div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-800 text-base uppercase text-center font-semibold">
					<Link to="/" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>
						Home
					</Link>
					<Link to="/gallery" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>
						Galleries
					</Link>
					<Link to="/packages" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>
						Packages
					</Link>
					<Link to="/team" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>
						Team
					</Link>
					<Link to="/contact" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>
						Contact
					</Link>
				</div>
			)}
		</div>





</div>
	)
}

export default Nav





{/* <body>
  <div className="relative w-20 group bg-red-100">
    <div>
      Menu
    </div>
    <div className="absolute w-20 invisible group-hover:visible bg-green-100">
      <div>Item1</div>
        <div className="relative group2 bg-red-100">
          <div>
            Menu
          </div>
          <div className="absolute w-20 top-0 left-20 invisible group2-hover:visible bg-green-100">
            <div>Item1</div>
            <div>Item2</div>
            <div>Item3</div>
          </div>
        </div>
      <div>Item3</div>
    </div>
  </div>
</body> */}
