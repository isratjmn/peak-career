import React from "react";
import socialIcons from '../../images/icons/socialIcons.png';

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white divide-y">
            <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:px-8 px-5 py-16">
                <div>
                    <h1 className="font-bold text-3xl pb-4">PeakCareer</h1>
                    <p className="pb-6">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img className="w-32" src={socialIcons} alt="social-icons" />
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4">Company</h1>
                    
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4">Product</h1>
                    
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4">Support</h1>
                    
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
