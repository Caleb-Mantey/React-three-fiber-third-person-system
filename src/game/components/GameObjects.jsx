import React from "react";
import { Plane } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import CharacterController from "./player/CharacterController";

function GameObjects() {
  return (
    <>
      <Physics debug>
        <CharacterController/>

        {/* <Barn position={[3,0,3]}/> */}

        <RigidBody type="fixed" shape="hull">
          <Plane
            args={[40, 40]}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -0.5, 0]}
          >
            <meshStandardMaterial color="gray" />
          </Plane>
        </RigidBody>
      </Physics>
    </>
  );
}

export default GameObjects;
