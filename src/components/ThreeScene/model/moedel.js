import React, { useState } from "react";
import { useLoader, useThree,useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring,easings } from "@react-spring/three";
export default function Model() {
  const model = useLoader(GLTFLoader, "./test.glb");
  const { camera } = useThree();
  const [to,setTo] = useState({x:0,y:0,z:0});
  const [dist,setDistance] = useState(0)
  const springProps = useSpring({
    config: { duration:  1000*dist, easing: easings.easeCubic },
    from: {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z,
      lookAtX: camera.position.x - 0.1,
      lookAtY: camera.position.y - 0.1,
      lookAtZ: camera.position.z - 0.1,
    },
    to: {
      x: to.x,
      y: to.y,
      z: to.z,
      lookAtX: to.x-2,
      lookAtY: to.y+0.8,
      lookAtZ: to.z,
    },
  });
  const handleClick = (e) => {
    console.log(camera.position)
    const val = e.point;
    // const cp = camera.position;
    setTo(val)
    const dx = Math.abs(camera.position.x - to.x);
    const dz = Math.abs(camera.position.z - to.z);
    const distance = Math.sqrt(dx * dx + dz * dz);
    setDistance(distance)
  };

  useFrame((state, delta) => {
    if (to.x) {
      let x = springProps.x.animation.values[0]._value;
      let y = springProps.y.animation.values[0]._value;
      let z = springProps.z.animation.values[0]._value;
      camera.position.set( x, y, z)
      camera.lookAt(
        springProps.lookAtX.animation.values[0]._value,
        springProps.lookAtY.animation.values[0]._value,
        springProps.lookAtZ.animation.values[0]._value 
      );
    }
    camera.updateProjectionMatrix();
  });
  return <primitive object={model.scene} onClick={(e) => handleClick(e)} />;
}
