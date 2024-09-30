import React, { Suspense } from "react";
import { Player } from "../components/player/Player";
import CameraSystem from "../components/CameraSystem";
import { Environment, KeyboardControls, Sky } from "@react-three/drei";
import GameObjects from "../components/GameObjects";
import PostProcessing from "../components/PostProcessing";

function Scene() {

  const keyboardMap = [
    {name: 'forward', keys: ["ArrowUp", "KeyW"]},
    {name: 'backward', keys: ["ArrowDown", "KeyS"]},
    {name: 'left', keys: ["ArrowLeft", "KeyA"]},
    {name: 'right', keys: ["ArrowRight", "KeyD"]},
    {name: 'run', keys: ["Shift"]},
  ]

  return (
    <>
      <KeyboardControls map={keyboardMap}>
        <Suspense fallback={null}>
          <CameraSystem />
          <GameObjects/>
          <Environment preset="city" />
          <Sky
            distance={450000}
            sunPosition={[0, 1, 0]}
            inclination={0}
            azimuth={0.25}
          />

          <PostProcessing/>
        </Suspense>
      </KeyboardControls>
    </>
  );
}

export default Scene;
