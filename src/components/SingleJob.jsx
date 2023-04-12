import React from "react";
import {
	MapPinIcon,
	CurrencyBangladeshiIcon,
	BriefcaseIcon,
	PhoneIcon,
} from "@heroicons/react/24/solid";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleJob = ({ singleJob, handleApplyNow }) => {
	const {
		id,
		companyName,
		companyLogo,
		jobTitle,
		remoteOrOnsite,
		fulltimeOrParttime,
		salary,
		location,
		description,
		responsibility,
		requirements,
		experience,
		phoneNumber,
		email,
	} = singleJob;

	// Toast Function
/* 	const addAppliedJobs = () => {
		const appliedListsDb = getAppliedList();
		let toastShown = false;
		for (const id in appliedListsDb) {
			if (id === savedCart.id && !toastShown) {
				toast("You have already applied 🔥");
				toastShown = true;
			}
		}
		if (!toastShown) {
			toast("Congratulations! Application done 🆗");
			toastShown = false;
		}
	}; */

	return (
		/* Job Details Section */
		<>
			<div className="bg-indigo-100">
				<div className="main-container flex flex-col lg:flex-row gap-x-10 items-center justify-between">
					{/* Text Content */}
					<div className="pb-20 lg:mt-8 py-10 mx-auto lg:mb-0">
						<h2 className="mx-auto font-sans font-bold tracking-normal text-indigo-600 text-3xl lg:text-4xl sm:leading-none lg:leading-tight px-3">
							Job Details
						</h2>
					</div>
				</div>
			</div>
			<div className="details-container">
				<div className="p-4 lg:py-36 grid grid-cols-1 md:grid-cols-8 lg:gap-12">
					<div className="col-span-5 tracking-wide text-base">
						<img src={companyLogo} className="w-[30%] pb-6" alt="" />
						<h2 className="pb-3">
							<span className="font-bold text-xl">
								Job Description:
							</span>{" "}
							{description}
						</h2>
						<h2 className="pb-3">
							<span className="font-bold text-xl pb-2">
								Job Responsibility:
							</span>{" "}
							{responsibility}
						</h2>
						<h2 className="pb-3">
							<p className="font-bold text-xl pb-1">
								Educational Requirements:
							</p>
							{requirements}
						</h2>
						<h2 className="pb-3">
							<p className="font-bold text-xl pb-1">
								Experience:
							</p>
							{experience} of experience in IT Field.
						</h2>
					</div>
					<div className="col-span-3 ">
						<div className="flex flex-col bg-indigo-100 rounded-md p-4">
							<p className="font-bold">Job Details</p>
							<hr className="h-[2px] my-3 bg-gray-300" />
							<div className="flex items-center">
								<CurrencyBangladeshiIcon className="h-5 w-5 text-indigo-500" />
								<p className="text-sm text-gray-500">
									<span className="font-bold px-2">
										Salary:
									</span>
									<span>{salary}</span>
								</p>
							</div>
							<div className="flex items-center mt-2">
								<BriefcaseIcon className="h-5 w-5 text-indigo-500"></BriefcaseIcon>
								<div className="px-2">
									<p className="text-sm break-normal text-gray-500">
										<span className="font-bold">
											Job Title:{" "}
										</span>
										<span>{jobTitle}</span>
									</p>
								</div>
							</div>
							<p className="font-bold mt-5">
								Contact Information
							</p>
							<hr className="h-[2px] my-3 bg-gray-300"></hr>
							<div className="flex items-center">
								<PhoneIcon className="h-5 w-5 text-indigo-500" />
								<p className="text-sm text-gray-500">
									<span className="font-bold px-2">
										Contact No:
									</span>
									<span>{phoneNumber}</span>
								</p>
							</div>
							<div className="flex items-center mt-2">
								<BriefcaseIcon className="h-5 w-5 text-indigo-500" />
								<p className="px-2 text-sm break-normal text-gray-500">
									<span className="font-bold">Email: </span>
									<span>{email}</span>
								</p>
							</div>
							<div className="flex items-center mt-2">
								<MapPinIcon className="h-5 w-5 text-indigo-500"></MapPinIcon>
								<p className="px-2 text-sm break-normal text-gray-500">
									<span className="font-bold">Address: </span>
									<span>{location}</span>
								</p>
							</div>
						</div>
						<button
							onClick={() => {
								handleApplyNow(id);

							}}
							className="btn job-btn mt-4 w-full"
						>
							Apply Now
						</button>
						<ToastContainer></ToastContainer>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleJob;
