import React, { useEffect, useState } from 'react';
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
            <div className='flex flex-col items-center pb-24 text-center lg:pb-56 text-gray-900'>
                <h1 className=' pt-36 w-full lg:leading-tight sm:text-4xl lg:text-5xl font-bold lg:max-w-3xl title-text'>Featured Jobs</h1>
                <p className='my-6 text-xs sm:text-base md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-gray-900'>Finding a job that matches one's skills and interests can be a key factor in achieving career success and job satisfaction.</p>
            </div>
            <div className='grid grid-cols lg:grid-cols-4 gap-x-2 container mx-auto'>
                {jobs.map((job) => 
                <Job>
                    key={job.id}
                    job= {job}
                </Job>
                )}
            </div>
        </section>
    );
};

export default Featurejobs;