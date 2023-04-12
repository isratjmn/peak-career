import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowAllItems from './ShowAllItems';

const AppliedJobs = () => {
    const savedCart = useLoaderData();
    console.log(savedCart);

    return (
        <div>
            <div className="bg-indigo-100">
				<div className="main-container flex flex-col lg:flex-row gap-x-10 items-center justify-between">
					{/* Text Content */}
                    <div className="pb-20 lg:mt-8 py-10 mx-auto lg:mb-0">
                        <h2 className="mx-auto font-sans font-bold tracking-normal text-indigo-600 text-4xl lg:text-5xl sm:leading-none lg:leading-tight px-3">
                        Applied Jobs
                        </h2>
                    </div>
				</div>
			</div>
{/*             <p>{
                savedCart.map(product => <ShowAllItems
                key = {product.id} product= {product}
                >

                </ShowAllItems>)


                }</p> */}
                <p>{savedCart.length}</p>
        </div>
    );
};

export default AppliedJobs;