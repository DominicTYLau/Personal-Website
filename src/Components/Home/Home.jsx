import React, { Component } from 'react'
import './Home.css'
import Typewriter from "typewriter-effect"

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			typewriterKey: 0, // Key to re-render Typewriter
		};
	}

	componentDidMount() {
		const ArrowBtn = document.getElementById("Arrow");

		ArrowBtn.addEventListener("click", () => {
			document.getElementById("About").scrollIntoView({
				behavior: "smooth",
				block: "center",
			});
		});
	}

	restartTypewriter = () => {
		// Update state to trigger re-render of Typewriter
		this.setState((prevState) => ({
			typewriterKey: prevState.typewriterKey + 1,
		}));
	};

	render() {
		return (
			<section id="Home">
				<div className="Home" onClick={this.restartTypewriter}>
					<div className="HomeContainer">
						<h1>
							Hi! My Name is <span>Dominic Lau</span>
						</h1>
						<Typewriter
							key={this.state.typewriterKey} // Unique key to reset Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString("...A Programmer")
									.start()
									.pauseFor(2000)
									.deleteAll(100)
									.start()
									.typeString("...A Maker")
									.start()
									.pauseFor(2000)
									.deleteAll(100)
									.typeString("...A Problem Solver")
									.start();
							}}
						></Typewriter>

						<a className="arrow" id="Arrow">
							<svg
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M11.178 19.569a.998.998 0 001.644 0l9-13A.999.999 0 0021 5H3a1.002 1.002 0 00-.822 1.569l9 13z" />
							</svg>
						</a>
					</div>
				</div>
			</section>
		);
	}
}