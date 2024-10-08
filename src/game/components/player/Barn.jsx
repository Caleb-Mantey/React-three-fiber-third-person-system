/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/barn.gltf -k -K -0 src/game/components/models/Barn.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Barn(props) {
  const { nodes, materials } = useGLTF('/barn.gltf')
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Barn_001" geometry={nodes.Barn_001.geometry} material={materials.None} />
      </group>
    </group>
  )
}

useGLTF.preload('/barn.gltf')
