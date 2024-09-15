import React, { Suspense } from 'react'
import { Player } from '../components/models/Player'
import CameraSystem from '../components/CameraSystem'
import { Environment, Sky } from '@react-three/drei'
// import { Model } from '../components/models/Militant'

function Scene() {
  return (
    <>
      <Suspense fallback={null}>
        <Player/>
        <CameraSystem/>

        <Environment preset='city'/>
        <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
      </Suspense>
    </>
  )
}

export default Scene