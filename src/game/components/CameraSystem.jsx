import {
  PerspectiveCamera,
} from "@react-three/drei";
import React from "react";

function CameraSystem() {
  

  return (
    <>
      <PerspectiveCamera
          makeDefault
          fov={65}
          position={[0,0,-10]}
          aspect={window.innerWidth / window.innerHeight}
        ></PerspectiveCamera>
    </>
  );
}

export default CameraSystem;
