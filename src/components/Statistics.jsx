import React from "react";
import {
	ComposedChart,
	Line,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
    ResponsiveContainer,
} from "recharts";

const Statistics = () => {

	const data = [
		{
            id: 1,
			name: "Assign 1",
			AchievedMarks: 60,
		},
		{
            id: 2,
			name: "Assign 2",
			AchievedMarks: 60,
		},
		{
            id: 3,
			name: "Assign 3",
			AchievedMarks: 45,
		},
		{
            id: 4,
			name: "Assign 4",
			AchievedMarks: 60,
		},
		{
            id: 5,
			name: "Assign 5",
			AchievedMarks: 40,
		},
		{
            id: 6,
			name: "Assign 6",
			AchievedMarks: 58,
		},
		{
            id: 7,
			name: "Assign 7",
			AchievedMarks: 60,
		},
	];
	return (
		<>
            {/* Statistics Header */}
			<div className="bg-indigo-100">
				<div className="main-container flex flex-col lg:flex-row gap-x-10 items-center justify-between">
					{/* Text Content */}
					<div className="py-10 mx-auto lg:mb-0">
						<div className="pb-12 lg:mt-8">
							<h2 className="mx-auto font-sans font-bold tracking-normal text-indigo-600 text-4xl lg:text-4xl sm:leading-none lg:leading-tight px-3">
								Statistics
							</h2>
						</div>
					</div>
				</div>
			</div>
            {/* Rechart Of Assignment Marks */}
			<div className="mr-4 lg:mr-0">
			<div className="card mb-10 mx-auto py-20 sm:text-center sm:w-[50%] lg:max-w-2xl md:mb-12">
                <ResponsiveContainer width="100%" aspect= {2}>
                    <ComposedChart
                        width={1000}
                        height={600}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                        >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="AchievedMarks" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="AchievedMarks" stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
			</div>
            
		</>
	);
};

export default Statistics;
