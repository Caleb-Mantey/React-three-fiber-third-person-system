import { CapsuleCollider, RigidBody } from '@react-three/rapier'
import React, {useMemo, useRef} from 'react'
import { Player } from './Player'
import { useControls } from 'leva'
import { useFrame } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei';
import { Quaternion, Vector3 } from 'three'

function CharacterController() {
  const rb = useRef()
  const [, get] = useKeyboardControls();
  const camDir = useMemo(() => new Vector3(), []);


  const { walk_speed,run_speed } = useControls("Character Controller", {
    walk_speed: {value: 1.2, min: 0.1, max: 4, step: 0.1},
    run_speed: {value: 1.6, min: 0.1, max: 4, step: 0.1}
  })

  useFrame(({camera, delta, scene}) => {
    if(rb.current){
      const vel = rb.current.linvel();

      const movement = {
        x: 0,
        z: 0,
      }

      if(get().forward){
        movement.z = 1;
      }

      if(get().backward){
        movement.z = -1;
      }

      let speed = get().run ? run_speed : walk_speed;

      if(get().left){
        movement.x = 1;
      }

      if(get().right){
        movement.x = -1;
      }

      if(movement.x !== 0 || movement.z !== 0){
        vel.z = speed * movement.z;
      }

      rb.current.setLinvel(vel, true);

      const cameraPivot = scene.getObjectByName("CameraPivot")
      cameraPivot.getWorldDirection( camDir ).multiplyScalar(-2).normalize();

      const targetQuaternion = new Quaternion().setFromUnitVectors(
        new Vector3(0, 0, 1),
        camDir
      );

      if (rb.current) {
        targetQuaternion.x = 0;
        targetQuaternion.z = 0;
        rb.current.setRotation(targetQuaternion, true);
      }
    }
  })

  return (
    <>
        <RigidBody colliders={false} lockRotations ref={rb}>
          <Player rb={rb} />
          <CapsuleCollider args={[0.6, 0.3]} position={[0,0.9,0]}/>
        </RigidBody>
    </>
  )
}

export default CharacterController