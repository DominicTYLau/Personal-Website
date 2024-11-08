// src/App.jsx

import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import ProjectList from "./Components/Project/ProjectList";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home id="Home" />
			<About id="About" />
			<ProjectList id="ProjectList" />
			<Footer id="Footer" />
		</div>
	);
}

export default App;