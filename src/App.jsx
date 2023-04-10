import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import CategoryList from "./components/CategoryList";
import Featurejobs from "./components/Featurejobs";

const App = () => {
	return (
		<div>
			<Header></Header>
			<div>
				<Outlet/>
			</div>
			<Footer/>
		</div>
	);
};

export default App;
