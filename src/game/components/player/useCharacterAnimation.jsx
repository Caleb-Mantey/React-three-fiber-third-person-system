import { useFrame } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react'
import useFollowCam from '../../hooks/useFollowCamera';
import { useKeyboardControls } from '@react-three/drei';
import { Euler, Quaternion } from 'three';
import { CapsuleCollider, RigidBody, quat, vec3, euler } from '@react-three/rapier'


const AnimationKeyBinding = {
  "forward": 'run',
  "backward": 'back',
  "left": 'left',
  "right": 'right',
  "idle": 'idle',
}

function useCharacterAnimation({group, actions, rb}) {
  const { yaw } = useFollowCam(group, [0, 1.3, 2.5])
  const lastAnimState = useRef('idle');
  const [, get] = useKeyboardControls();
  const euler = useMemo(() => new Euler(), [])
  // const quat = useMemo(() => new Quaternion(), [])

  const InputActions = {
    "forward": () => {
      executeAnimation('run');
    },
    "backward": () => {
      executeAnimation('back');
    },
    "left": () => {
      executeAnimation('left');
    },
    "right": () => {
      executeAnimation('right');
    },
    "idle": () => {
      executeAnimation('idle');
    }
  }

  const executeAnimation = (newAnim) => {
    actions[AnimationKeyBinding[lastAnimState.current]].fadeOut(0.1);
    actions[newAnim].reset().fadeIn(0.1).play();
    }
  
    const animatePlayer = () => {
      const keys = Object.keys(InputActions);
      let noAction = true;
  
      keys.forEach(key => {
        if(get()[key])
          {
            noAction = false;
            if(lastAnimState.current === key) return;
            InputActions[key]();
            lastAnimState.current = key;
          }
      });
  
      if(noAction){
        if(lastAnimState.current === "idle") return;
        InputActions['idle']();
        lastAnimState.current = 'idle';
      }
    }

    // useFrame(() => {
    //   euler.y = yaw.rotation.y
    //   // quat.setFromEuler(euler)
    //   // inputVelocity.applyQuaternion(quat)

    //   const quaternion = quat(euler);
    //   // const eulerRot = euler().setFromQuaternion(
    //   //   quat(rb.current.rotation())
    //   // );

    //   if(rb) rb.current.setRotation(quaternion, true);
    // })

  return { animatePlayer}
}

export default useCharacterAnimation