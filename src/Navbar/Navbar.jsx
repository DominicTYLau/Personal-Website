import React, { Component } from "react";
import "./Navbar.css";
import logo from "../images/logo.jpeg";

export default class Navbar extends Component {
	componentDidMount() {
		const document = window.document;
		const AboutBtn = document.getElementById("AboutBtn");
		const ProjectsBtn = document.getElementById("ProjectsBtn");
		const Logo = document.getElementById("Logo");
		const Name = document.getElementById("Name");

		AboutBtn.addEventListener("click", () => {
			document.getElementById("About").scrollIntoView({
				behavior: "smooth",
				block: 'center'
			});
		});

		ProjectsBtn.addEventListener("click", () => {
			console.log("hello");
			document.getElementById("ProjectList").scrollIntoView({
				behavior: "smooth",
				block: 'start'
			});
		});

		Logo.addEventListener("click", () => {
			document.getElementById("Home").scrollIntoView({
				behavior: "smooth",
				block: "end",
			});
		});
		Name.addEventListener("click", () => {
			document.getElementById("Home").scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		});
	}

	render() {
		return (
			<div className="Navbar">
				<div className="brand">
					<a id="Logo">
						<img className="logo" src={logo} alt="Dominic Lau" />
					</a>
					<a id="Name">
						<p>Dominic Lau</p>
					</a>
				</div>

				<div className="nav-list">
					<div className="hamburger">
						<div className="bar"></div>
					</div>
					<ul>
						<li>
							<a id="AboutBtn" data-after="About">
								About
							</a>
						</li>
						<li>
							<a id="ProjectsBtn" data-after="Projects">
								Projects
							</a>
						</li>	
					</ul>
				</div>
			</div>
		);
	}
}
