import { Html } from "@react-three/drei";
import React from "react";
import { RotatingSquare } from "react-loader-spinner";

const Loader = () => {
  return (
    <Html>
      <div className="loader" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <RotatingSquare 
      visible={true}
      height="100px"
      width="100px"
      color="#a9e5ff"
      ariaLabel="rotating-square-loading"
      wrapperStyle={{}}
      wrapperClass=""
      position="relative"
      />
      </div>
    </Html>
  );
};

export default Loader;

