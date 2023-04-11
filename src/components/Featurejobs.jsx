import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from './Job';

const Featurejobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, []) 


    


    return (
        <section>
            <div className='flex flex-col items-center pb-4 text-center lg:pb-12 text-gray-900'>
                <h1 className=' pt-36 w-full lg:leading-tight text-3xl lg:text-5xl font-bold lg:max-w-3xl title-text'>Featured Jobs</h1>
                <p className='my-6 text-lg px-4 md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-gray-900'>Finding a job that matches one's skills and interests can be a key factor in achieving career success and job satisfaction.</p>
            </div>
            <div className='main-container mb-40 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mx-auto'>
            {jobs.map((job)=> 
                <Job
                    key={job.id}
                    job= {job}
                ></Job>
                )}
            
            </div>
        </section>
    );
};

export default Featurejobs;