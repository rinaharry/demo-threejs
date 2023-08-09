import React from "react";
import { useLoader, useThree, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import TWEEN from '@tweenjs/tween.js'
import * as THREE from "three"
import { Clone } from "@react-three/drei";
export default function Montagne() {
  const model = useLoader(GLTFLoader, "./test.glb");
  const { camera } = useThree();
  const handleClick = (e) => {
    const val = e.point;
    console.log(e.point);
    const cp = camera.position;
    // setTo(val);
    const dx = Math.abs(camera.position.x - val.x);
    const dz = Math.abs(camera.position.z - val.z);
    const distance = Math.sqrt(dx * dx + dz * dz);
    // setDistance(distance);
    new TWEEN.Tween(camera.position)
    .to({x:val.x,y:val.y+1.008,z:val.z})
    .onUpdate(({ x, y, z }) => {
      camera.position.x = x;
      camera.position.y = y;
      camera.position.z = z
    })
    .onComplete(({x,y,z}) => {
      camera.lookAt(new THREE.Vector3(0,0,0))
    })
    .easing(TWEEN.Easing.Sinusoidal.In)
    .duration(1000)
    .start();
  };

  useFrame((state, delta) => {
  
    camera.updateProjectionMatrix();
    TWEEN.update()
  });
  return <>
      <Clone object={model.scene} onClick={(e) => handleClick(e)} scale={3} position={[-0.0566,-1.05,0]}  ></Clone>    
  </>;
}
