import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
	return (
		<div>
			<Header></Header>
			<div className=''>
				<Outlet/>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default App;
