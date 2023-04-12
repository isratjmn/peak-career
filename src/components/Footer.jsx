import React from "react";
import socialIcons from '../images/icons/socialIcons.png';
import jobSearch from "../images/icons/jobSearch.png";

const Footer = () => {
	return (
        /* Footer Section */
		<footer className="bg-gray-900 text-white divide-y">
            <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:px-8 py-16 container-fluid px-4 mx-auto md:px-24 lg:px-18 lg:py-20">
                <div>
                    <div className="flex gap-2">
                        <figure>
                            <img
                                className="w-6 lg:w-10"
                                src={jobSearch}
                                alt="logo"
                            />
                        </figure>
                        <h1 class="font-extrabold text-2xl lg:text-3xl pb-4">
                            Work<span class="text-indigo-700">Hive</span>
                        </h1>
                    </div>
                    <p className="pb-6 w-[90%]">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img className="w-32" src={socialIcons} alt="social-icons" />
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4">Company</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4">Product</h1>
                    <ul>
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4">Support</h1>
                    <ul>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developers</li>
                    </ul>
                    
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4 tracking-wide">Contact</h1>
                    <p>524 Broadway, NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </div>
            </section>
			
			<div
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center pt-2 text-gray-400 text-sm pb-8">
				<span className="text-center">@2023 PeakCareer. All Rights Reserved</span>
				<span className="text-center">Powered by PeakCareer</span>
				
			</div>
		</footer>
	);
};

export default Footer;
