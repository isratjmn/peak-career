import React from "react";

const Category = (props) => {
	const { image, name, jobs_available } = props.catagory;

	return (
		<div className="w-full">
			<div className="flex flex-col px-6 rounded-lg shadow-md bg-indigo-100 py-8">
				<img className="w-12 py-2 mb-2" src={image} alt="image" />
				<h2 className="text-2xl font-bold mb-2">{name}</h2>
				<p className="text-gray-700 mb-2">
					{jobs_available} + Jobs Available
				</p>
			</div>
		</div>
	);
};

export default Category;



