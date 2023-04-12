import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, CurrencyBangladeshiIcon } from "@heroicons/react/24/solid";

const ShowAllItems = ({ item }) => {
	const {
		id,
		companyLogo,
		jobTitle,
		companyName,
		remoteOrOnsite,
		fulltimeOrParttime,
		location,
		salary,
	} = item;

	return (
		<div className="main-container">
			<div className="grid grid-cols md:grid-cols-5 space-y-3 gap-y-4 md:gap-y-0 md:gap-4 border drop-shadow-sm p-3 md:p-5">
				<div className="card col-span-1 min-h-[10vh] flex justify-center items-center bg-gray-200 rounded-md">
					<img className="w-1/2" src={companyLogo} alt="" />
				</div>
				<div className="col-span-3 flex flex-col">
					<h1 className="text-gray-500 my-1 text-2xl">{companyName}</h1>
					<p className="font-semibold text-xl">{jobTitle}</p>
					<div className="flex gap-2 py-2 my-1">
						<button className="btn-remote">
							{remoteOrOnsite}
						</button>
						<button className="btn-remote">
							{fulltimeOrParttime}
						</button>
					</div>
					<div className="flex gap-3 mt-1">
						<div className="flex items-center">
							<MapPinIcon className="h-5 w-5 text-gray-500" />
							<p className="text-sm text-gray-500">{location}</p>
						</div>
						<div className="flex items-center">
							<CurrencyBangladeshiIcon className="h-5 w-5 text-gray-500 mr-1" />
							<p className="text-sm text-gray-500">
								Salary: {salary}
							</p>
						</div>
					</div>
				</div>
				<div className="card-actions items-center justify-start lg:justify-end ml-2 lg:ml-7 mb-4">
					<Link to={`../job-details/${id}`}>
						<button className="btn-details btn-primary">
							View Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ShowAllItems;
