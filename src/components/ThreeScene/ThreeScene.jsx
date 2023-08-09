import React, { useEffect, Suspense, useContext } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Scene from "./Scene/Scene";
import StepContext from "../../@core/ context/stepContext";
import Montagne from "./model/Montagne";
import sky from "../../images/sky.hdr"
import { useControls,folder } from "leva";
import { Environment } from '@react-three/drei'
import Map from "./model/Map";
import { stepPos } from "../../@core/data/stepPos.data";

function ThreeScene() {
  const { menuStep, setStep } = useContext(StepContext);
  const { camera } = useThree();

  console.log("menuStepmenuStep", menuStep);

  useEffect(() => {
    if (menuStep !== -1) {
      const pos =stepPos[menuStep];
      camera.position.set(pos.x,pos.y,pos.z)
      camera.updateProjectionMatrix();
    }
  }, [menuStep,stepPos]);
  const handleZoom = (zoomFactor) => {
    // camera.position.x *= camera.position.x;
    camera.position.y *= zoomFactor;
    camera.position.z *= zoomFactor;
    handleStepByZoom(camera.position.y, camera.position.z);
    camera.updateProjectionMatrix();
  };
  const handleStepByZoom = (y, z) => {
    //eto sis mila manipulena kel
    if (y < 1.790549808299171e-15 && y > 1.490549808299171e-15) {
      setStep(1);
    } else if (y < 1.490549808299171e-15 && y > 1.090549808299171e-15) {
      setStep(2);
    } else if (y < 1.090549808299171e-15 && y > 0.890549808299171e-15) {
      setStep(3);
    } else if (y < 0.890549808299171e-15 && y > 0.590549808299171e-15) {
      setStep(4);
    } else if (y < 0.590549808299171e-15 && y > 0.290549808299171e-15) {
      setStep(5);
    }
  };
  return (
    <>
      <PerspectiveCamera
        position={[0,-1,2.67]}
        fov={(window.innerHeight * 65) / 935}
        far={10000}
        near={0.001}
        rotation={[0, Math.PI/3, 0]}
      >
           <OrbitControls
            maxPolarAngle={Math.PI/2}
            minPolarAngle={Math.PI / 2}
            enablePan={false} 
            enableDamping={true}
            target={[0,0,2.67]}
          />
          <ambientLight />
          <pointLight position={[0, 0, 10]} intensity={0.4} />
        {/* <Texts /> */}
        <Environment files={sky} background />
        <Suspense fallback={null}>
          {/* <mesh position={[0, -20, 0]} scale={60}>
            <Montagne />
          </mesh> */}
          <Montagne/>
          {/* <mesh position={[44.6509253754988, -9.764474307199073, -154.29638360447623]} scale={0.5}>
            <Map />
          </mesh> */}
          <Map/>
        </Suspense>
      </PerspectiveCamera>
    </>
  );
}
export default ThreeScene;
