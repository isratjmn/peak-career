import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleJob from "./SingleJob";
import { addToDb } from "../Utilities/FakeDb";

const JobsDetails = () => {
	const { id } = useParams();
	const [jobs, setJobs] = useState([]);

	// Apply Now Button Handler
	const handleApplyNow = (id) => {
		console.log(id);
        addToDb(id)
	};

	useEffect(() => {
		fetch("/jobs.json")
			.then((res) => res.json())
			.then((job) => {
				const selectedJobs = job.find((j) => j.id.toString() === id);
				setJobs([selectedJobs]);
			});
	}, [id]);
	return (
		<div>
			{jobs.map((singleJob) => (
				<SingleJob
					key={singleJob.id}
					singleJob={singleJob}
					handleApplyNow={handleApplyNow}
				></SingleJob>
			))}
		</div>
	);
};

export default JobsDetails;
