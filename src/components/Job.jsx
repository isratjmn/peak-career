import React from "react";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
	const { id, companyName, companyLogo, jobTitle, remoteOrOnsite, fulltimeOrParttime, location, salary } =
		job;

	return (
		<div>
			<div className="card container border rounded mx-auto bg-base-100 shadow-xl">
				<figure className="ml-8 me-auto">
					<img
						className="object-cover w-[200px] py-6 mb-0 h-[130px] rounded"
						src={companyLogo}
						alt="companyLogo"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title font-bold">{jobTitle}</h2>
					<h2 className="text-xl font-bold">{companyName}</h2>
					<div className="card-actions justify-start">
						<button className="btn-remote btn-primary">{remoteOrOnsite}</button>
						<button className="btn-remote btn-primary">{fulltimeOrParttime}</button>
					</div>
					<div className="flex justify-between flex-wrap">
						<p className="text-lg py-2 font-medium">
							Location: {location}
						</p>
						<p className="text-lg py-2 font-medium">
							Salary: {salary}
						</p>
					</div>
				</div>
				<div className="card-actions justify-start ml-7 mb-4">
                    <Link to={`job-details/${id}`}>
                        <button className="btn-details btn-primary">View Details</button>
                    </Link>
				</div>
			</div>
		</div>
	);
};

export default Job;
