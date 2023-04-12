import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleJob from "./SingleJob";
import { addToDb } from "../Utilities/FakeDb";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobsDetails = () => {
	const { id } = useParams();
	const [jobs, setJobs] = useState([]);

	const getJobCart = () => {
        let jobCart = {};
    
        //get the shopping cart from local storage
        const storedCart = localStorage.getItem('applied-list');
        if (storedCart) {
            jobCart = JSON.parse(storedCart);
        }
        return jobCart;
    }
	const notify = (id) => toast(`you have added job-${id}`);


	// Apply Now Button Handler
	const handleApplyNow = (id) => {
        
		const dataID=getJobCart()
        if(dataID[id]){
            console.log('already added')
        } else{
            notify(id)
        }
		addToDb(id);
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
