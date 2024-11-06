import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./Footer.css";
import Model from "../model.jsx";
import Loader from "../Loader.jsx";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const adjustRobotForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -3, 0];
    let rotation = [0, 0, 0];

    if (window.innerWidth < 600) {
      screenScale = [2.5, 2.5, 2.5];
    } else {
      screenScale = [3, 3, 3];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [robotScale, robotPosition, robotRotation] = adjustRobotForScreenSize();

  return (
    <section id="Footer">
      <div className="Footer">
        <Canvas
          className={`footerCanvas ${isRotating ? "cursor-grabbing" : "cursor-default"}`}
          camera={{ position: [0, 0, 10], fov: 50, near: 0.1, far: 100 }} // Adjust camera position for full screen
        >
          <Suspense fallback={<Loader/>}>
            <directionalLight position={[-2, -3, 0]} intensity={5} />
            <ambientLight intensity={15} />
            <hemisphereLight skyColor="#0000FF" groundColor="0000FF" intensity={0} />

            <Model
              scale={robotScale}
              position={robotPosition}
              rotation={robotRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
            />
          </Suspense>
        </Canvas>

        <div className="FooterContainer">
          <p>Thanks for stopping by!</p>
        </div>
      </div>
    </section>
  );
};

export default Home;