// src/App.jsx

import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import ProjectList from "./Project/ProjectList.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home id="Home" />
			<About id="About" />
			<ProjectList id="test" />
			<Footer id="Footer" />
		</div>
	);
}

export default App;