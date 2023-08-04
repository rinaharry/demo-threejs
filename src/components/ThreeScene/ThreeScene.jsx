import React, { useRef } from "react";

import { useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
// import sky from "../../images/texture.hdr";
import background from "../../images/background.hdr";
import Text from "./Text/Text";

const ThreeScene = ({ step }) => {
  const orbitControlRef = useRef();
  useFrame((state) => {
    if (step != -1) {
      state.camera.rotateY(((step * 60) / 180) * Math.PI);
    }
  });

  return (
    <>
      <pointLight position={[5, 5, 5]} intensity={2} />
      <ambientLight intensity={1.4} />
      <OrbitControls
        ref={orbitControlRef}
        rotateSpeed={Math.PI / 6}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
      <Text />
      <Environment files={background} background />
    </>
  );
};

export default ThreeScene;
