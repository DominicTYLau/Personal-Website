import React, { useRef, useEffect } from "react";
import "./Project.css";

const Project = ({ NameOfProject, imageUrl, Description, readMoreURL}) => {
	const descriptionRef = useRef(null);

	return (
		<div className="ProjectContainer">
			<div className="image">
			<img src={imageUrl} alt="Image" />
			</div>
			<div className="ProjectInfo">
				<h2>{NameOfProject}</h2>
				<h3>{Description}</h3>
				<a href={readMoreURL} target="_blank">
				<button>{"Read More"}</button>
			  </a>
			</div>
		</div>
	);
};

export default Project;
