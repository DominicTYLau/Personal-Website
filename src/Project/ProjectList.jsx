// src/ProjectList.jsx

import React, { Component } from "react";
import "./ProjectList.css";
import Project from "./Project";
import projectImage from "../images/background.png";
import roboticArmImage from "../images/projects/roboticArm.png";
import carImage from "../images/projects/car.png";
import tetrisImage from "../images/projects/tetris.png";
import todoImage from "../images/projects/todo.png";

export default class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectVisible: Array(5).fill(false), // Initialize visibility state for each project
    };
  }

  handleScroll = () => {
    const { projectVisible } = this.state;
    const projects = document.querySelectorAll('.grid-item');
    const viewportHeight = window.innerHeight;

    const updatedVisibility = projectVisible.map((isVisible, index) => {
      const project = projects[index];
      if (!project) return isVisible;

      const rect = project.getBoundingClientRect();
      return isVisible || (rect.top < viewportHeight * (2 / 3) && rect.bottom >= 0);
    });

    if (updatedVisibility.some((visible, index) => visible !== projectVisible[index])) {
      this.setState({ projectVisible: updatedVisibility });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { projectVisible } = this.state;

    return (
      <section id="ProjectList">
        <div className="ProjectList"> 
          <div className="ProjectListContainer">
            <h2>Projects</h2>
            <h3>
              Here are some of the projects I have worked on. I have multiple side
              projects involving Python, Arduino, computer vision, and Raspberry Pi.
            </h3>
          </div>
          <div className="ProjectsContainer">
            <div className={`grid-item ${projectVisible[0] ? 'visible' : ''}`}>
              <Project
                NameOfProject="4 DOF Robotic Arm"
                imageUrl={roboticArmImage}
                Description="Currently in progress. Researched ROS2 and designed the arm in Fusion 360."
                readMoreURL="https://github.com/DominicTYLau"
              />
            </div>
            <div className={`grid-item ${projectVisible[1] ? 'visible' : ''}`}>
              <Project
                NameOfProject="Autonomous Car"
                imageUrl={carImage}
                Description="A 3D-printed vehicle with a camera for autonomous lane detection, switchable to manual mode via a joystick."
                readMoreURL="https://github.com/DominicTYLau/Self-Centring-RC-Car"
              />
            </div>
            <div className={`grid-item ${projectVisible[2] ? 'visible' : ''}`}>
              <Project
                NameOfProject="Tetris in Java"
                imageUrl={tetrisImage}
                Description="Simple Tetris game made using Java Swing."
                readMoreURL="https://github.com/DominicTYLau/Tetris"
              />
            </div>
            <div className={`grid-item ${projectVisible[3] ? 'visible' : ''}`}>
              <Project
                NameOfProject="ToDo Tracker"
                imageUrl={todoImage}
                Description="The to-do tracker uses Java Swing for a GUI, with tasks sorted by priority and due date."
                readMoreURL="https://github.com/DominicTYLau/Tetris"
              />
            </div>
            <div className={`grid-item ${projectVisible[4] ? 'visible' : ''}`}>
              <Project
                NameOfProject="CSS Styling"
                imageUrl={projectImage}
                Description="A website purely made with HTML and CSS."
                readMoreURL="https://github.com/DominicTYLau/Tetris"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}