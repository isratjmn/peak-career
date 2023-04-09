import React from 'react';
import socialIcons from '../../images/icons/socialIcons.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-zinc-300 nav-container">
			<div className="relative flex items-center justify-between">
				{/* Logo Section */}
				<Link to="/" className="inline-flex items-center">
					
					<span className="ml-2 text-2xl font-bold tracking-wide text-black">
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
							}>
							Statistics
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/applied-jobs"
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}>
							Applied Jobs
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/blog"
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}>
							Blog
						</NavLink>
					</li>
				</ul>
                <div className="flex flex-col items-center md:flex-row">
					<Link to="/books" className="btn md:w-auto md:mr-4">
						<div className="inline-flex items-center justify-center w-full h-full">
							<p className="mr-3">Star Applying</p>
						
						</div>
					</Link>
                </div>
                
				{/* Mobile Navbar Section */}
				<div className="lg:hidden">
					{/* Dropdown open Button */}
					<button
						title="Open Menu"
						aria-label="open Menu"
						
					>
						{/* <Bars3BottomRightIcon className="w-5 text-slate-800" /> */}
					</button>
					
				</div>
			</div>
		</div>
    );
};

export default Header;