import { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
import { useTexture, Html } from "@react-three/drei";
import { BackSide } from "three";
import t from "../../../images/digital_painting_golden_hour_sunset.jpg";

import Welcome from "../../Welcome/Welcome";
import Weather from "../../Weather/Weather";
// import DirectorWord from "../../DirectorWord/DirectorWord";
export default function SkyBox() {
  const texture = useTexture(t);

  const testRef = useRef();

  return (
    <group ref={testRef}>
      <mesh
        userData={{ lensflare: "no-occlusion" }}
        lensflare
        scale={[-1, 1, 1]}
      >
        <sphereGeometry
          castShadow={false}
          receiveShadow={false}
          args={[50, 32, 32]}
        />
        <meshBasicMaterial toneMapped={false} map={texture} side={BackSide} />
      </mesh>
      <mesh>
        <Html children={<Welcome />} transform occlude position={[0, 0, 45]} />
      </mesh>
      <mesh>
        <Html position={[0, 1, 24]} children={<Weather />} />
      </mesh>
    </group>
  );
}
