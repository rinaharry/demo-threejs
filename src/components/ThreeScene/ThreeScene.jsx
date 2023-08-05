import React, {useEffect, Suspense,useContext } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
} from "@react-three/drei";
import Scene from "./Scene/Scene"
import StepContext from "../../@core/ context/stepContext";
function ThreeScene() {
  const { menuStep, setStep } = useContext(StepContext);
  const {camera} = useThree();
  useFrame((state) => {
    if (menuStep != -1) {
      // state.camera.position.set(camera.position.x+step,camera.position.y+step,camera.position.z+step)
    }
  });
  useEffect(()=>{
    if(menuStep!=-1) {
      switch (menuStep) {
        case 0:
          camera.position.set(0, -3, 40)  
        break;
        case 1:
          camera.position.set(0,1.790549808299171e-15,29.241897493151843)  
        break;
        case 2:
          camera.position.set(0,1.490549808299171e-15,23.241897493151843)  
        break;
        case 3:
          camera.position.set(0,1.090549808299171e-15,17.241897493151843)  
        break;
        case 4:
          camera.position.set(0,0.890549808299171e-15,11.241897493151843)  
        break;
        case 5:
          camera.position.set(0,0.590549808299171e-15,4.241897493151843)  
        break;
        default:
          break;
      }
      camera.updateProjectionMatrix();
    }
  },[menuStep])
  const handleZoom = (zoomFactor) => {
    // camera.position.x *= camera.position.x;
    camera.position.y *= zoomFactor;
    camera.position.z *= zoomFactor;
    handleStepByZoom(camera.position.y,camera.position.z);
    camera.updateProjectionMatrix();
  };
  const handleStepByZoom =(y,z)=>{
    //eto sis mila manipulena kel
   if(y<1.790549808299171e-15 && y>1.490549808299171e-15){
      setStep(1)
    }else if(y<1.490549808299171e-15 && y>1.090549808299171e-15){
      setStep(2)
    }else if(y<1.090549808299171e-15 && y>0.890549808299171e-15){
      setStep(3)
    }else if(y<0.890549808299171e-15&& y>0.590549808299171e-15){
      setStep(4)
    }
    else if(y<0.590549808299171e-15 && y>0.290549808299171e-15){
      setStep(5)
    }
  }
  useEffect(() => {
    const handleMouseWheel = (event) => {
      const zoomFactor = event.deltaY > 0 ? 1.1 : 0.9;
      handleZoom(zoomFactor);
    };

    window.addEventListener('wheel', handleMouseWheel);

    return () => {
      window.removeEventListener('wheel', handleMouseWheel);
    };
  }, []);
  return (
    <>
      <pointLight position={[5, 5, 5]} intensity={2} />
      <ambientLight intensity={1.4} />
      <OrbitControls rotateSpeed={Math.PI/6} minPolarAngle={0} maxPolarAngle={Math.PI/2} enableRotate={false} enableZoom={false} />
      {/* <Texts /> */}
      {/* <Environment files={sky} background /> */}
      <Suspense fallback={null} >
          <Scene/>
      </Suspense>
    </>
  );
}
export default ThreeScene;