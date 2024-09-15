import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./game/scene/Scene";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const canvas = document.getElementById("threejs_canvas");
    canvas.addEventListener("click", pointerLock);

    return () => {
      if (canvas) canvas.removeEventListener("click", pointerLock);
    };
  }, []);

  const pointerLock = () => {
    const canvas = document.getElementById("threejs_canvas");
    canvas.requestPointerLock();
  };

  return (
   
      <Canvas id="threejs_canvas" style={{ width: "100vw", height: "100vh" }}>
        <Scene />
      </Canvas>
   
  );
}

export default App;
