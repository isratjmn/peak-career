import React, { useState } from "react";
import socialIcons from "../images/icons/socialIcons.png";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'


const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<div className="bg-zinc-200 container-fluid px-4 py-6 mx-auto md:px-24 lg:px-18 lg:py-6">
			<nav className="relative flex items-center justify-between">
				{/* Logo Section */}
				<Link to="/" className="inline-flex items-center">
					<span className="ml-2 text-2xl text-indigo-600 font-bold tracking-wide">
						peakCareer
					</span>
				</Link>
				{/* Nav Item Section */}
				<ul className="items-center hidden space-x-8 lg:flex font-bold">
					<li>
						<NavLink
							to="/"
							title="Statistics"
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
						>
							Statistics
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/applied-jobs"
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
						>
							Applied Jobs
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/blog"
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
						>
							Blog
						</NavLink>
					</li>
				</ul>
				<div className="flex flex-col items-center md:flex-row">
					<Link to="#" className="btn md:w-auto md:mr-4">
						<div className="inline-flex items-center justify-center w-full h-full">
							<p className="mr-3">Start Applying</p>
						</div>
					</Link>
				</div>

				{/* Mobile Navbar Section */}
				<div className="lg:hidden">
					{/* Dropdown open Button */}
					<button
						title="Open Menu"
						aria-label="open Menu"
						onClick={() => setIsNavOpen(true)}
					>
						<Bars3BottomRightIcon className='w-5 text-gray-600' />
					</button>
					{isNavOpen && (
						<div className="absolute top-0 left-0 w-full z-10">
							<div className="p-5 bg-white border rounded shadow-sm">
								{/* Logo & Button section */}
								<div className="flex items-center justify-between mb-4">
									<div>
										<Link
											to="/"
											className="inline-flex items-center"
										>
											
											<span className="ml-2 text-xl font-bold text-indigo-700 tracking-wide">
												peakCareer
											</span>
										</Link>
									</div>
									{/* Dropdown Menu Close Button */}
									<div>
										<button
											aria-label="Close Menu"
											title="Close Menu"
											onClick={() => setIsNavOpen(false)}
										>
											<XMarkIcon className='w-5 text-gray-600' />
										</button>
									</div>
								</div>
								{/* Mobile Nav Items Section */}
								<nav>
									<ul className="space-y-4">
										<li>
											<Link to="/" className="default">
                                                Statistics
											</Link>
										</li>
										<li>
											<Link
												to="/books"
												className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
											>
												Applied Jobs
											</Link>
										</li>
										<li>
											<Link
												to="/about"
												className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
											>
												Blog
											</Link>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Header;
