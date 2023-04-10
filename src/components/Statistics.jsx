import React from "react";
import { Link } from "react-router-dom";
import bannerImg from '../images/photo/bannerImg.png';

const Statistics = () => {
	return (
		<div className="bg-zinc-200">
			<div className=" bg-zinc-200 main-container flex flex-col lg:flex-row gap-x-10 items-center justify-between">
				{/* Text Content */}
				<div className="mb-10 lg:mb-0">
					<div className="mb-6 lg:mt-8">
						
						<h2 className="max-w-lg mb-6 font-sans font-bold tracking-normal text-gray-900 text-4xl lg:text-6xl sm:leading-none lg:leading-tight px-3">
						One Step <br /> Closer To Your <br className="hidden md:block" />{" "}
							<span className="inline-block text-indigo-600">Dream Job</span>
						</h2>
						<p className="text-xl lg:text-lg text-gray-800 px-3">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
					</div>
					<div className="flex flex-col items-center md:flex-row">
						<Link to="#" className="btn md:w-auto md:mr-4">
							<div className="inline-flex items-center justify-center w-full h-full">
								<p className="text-lg mr-3 tracking-wide">Get Started</p>
							</div>
						</Link>
					</div>
				</div>
				<div className="sm:w-4/12 lg:w-full lg:pl-48">
					<img className="flex items-end" src={bannerImg} alt="bannerImage" />
				</div>
			</div>
		</div>
	);
};

export default Statistics;
