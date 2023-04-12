import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowAllItems from "./ShowAllItems";

const AppliedJobs = () => {
	const savedCart = useLoaderData();
    const[data,setData]=useState(savedCart)
    let onSite=[]
    const loadOnSite = ()=>{
        for(const item of savedCart){
            onSite= savedCart.filter((a)=>a.type=="On Site")
            setData(onSite)
        }
        console.log(onSite);
    }
    let remote=[]
    const loadRemote = ()=>{
        for(const item of savedCart){
            remote= savedCart.filter((a)=>a.type=="Remote")
            setData(remote)
        }
        console.log(remote);
    }
    console.log(savedCart)
    console.log(typeof savedCart)
    console.log(savedCart.length)


	return (
		<div>
			<div className="bg-indigo-100">
				<div className="main-container flex flex-col lg:flex-row gap-x-10 items-center justify-between">
					{/* Text Content */}
					<div className="pb-20 lg:mt-8 py-10 mx-auto lg:mb-0">
						<h2 className="mx-auto font-sans font-bold tracking-normal text-indigo-600 text-4xl lg:text-4xl sm:leading-none lg:leading-tight px-3">
							Applied Jobs
						</h2>
					</div>
				</div>
			</div>
			
			<div className="m-32">
                <div className="flex main-container mb-8 justify-center md:justify-end gap-2">
                    <button className="btn-details btn-primary">All Jobs</button>
                    <button onClick={()=>loadRemote()} className="btn-details btn-primary">Remote Jobs</button>
                    <button onClick={()=> loadOnSite()} className="btn-details btn-primary">Onsite Jobs</button>
                </div>
				{data.map((items) => (
					<ShowAllItems key={items.id} item={items}></ShowAllItems>
				))}
			</div>
		</div>
	);
};

export default AppliedJobs;
