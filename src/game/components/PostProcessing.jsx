import React from 'react'
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { useControls } from 'leva'

function PostProcessing() {
  const { enable_postprocessing } = useControls({enable_postprocessing: true})
  return (
    <>
    {enable_postprocessing ? <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={700} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.001} height={900} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
    </EffectComposer> : <></>}
    </>
  )
}

export default PostProcessing