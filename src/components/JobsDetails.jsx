import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SingleJob from "./SingleJob";


const JobsDetails = () => {
	const {id}  = useParams();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('/jobs.json')
			.then((res) => res.json())
			.then((job) => {
                const selectedJobs = job.find(j => j.id.toString() === id)
                console.log(selectedJobs);
                setJobs([selectedJobs])
            }
            );
    }, [id]);
	return <div>
        {
            jobs.map(singleJob => 
            <SingleJob
                key= {singleJob.id} singleJob= {singleJob}
            ></SingleJob>)
        }
    </div>;
};

export default JobsDetails;
