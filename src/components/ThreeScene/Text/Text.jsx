import { Html } from "@react-three/drei";
import Welcome from "../../Welcome/Welcome";
import Weather from "../../Weather/Weather";
import Birthday from "../../Birthday/Birthday";
import NewArrival from "../../NewArrival/NewArrival";
import DirectorWord from "../../DirectorWord/DirectorWord";

import { useControls } from "leva";

const Texts = () => {
  const { x, z, y, fontSize, color, rotationX, rotationY } = useControls({
    x: { value: 0, min: -10, max: 10 },
    y: { value: 0, min: -10, max: 10 },
    fontSize: { value: 3, min: 0.1, max: 3 },
    color: "#ffffff",
    rotationX: { value: Math.PI / 4, min: -Math.PI * 2, max: Math.PI * 2 },
    rotationY: { value: Math.PI / 3, min: -Math.PI * 2, max: Math.PI * 2 },
    rotationZ: { value: Math.PI / 3, min: -Math.PI * 2, max: Math.PI * 2 },
  });

  const radius = 50;

  return (
    <>
      {[
        <Welcome />,
        <Weather />,
        <Birthday />,
        <NewArrival />,
        <DirectorWord />,
        DirectorWord,
      ].map((component, index) => {
        const angle = ((index * 60) / 180) * Math.PI;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);

        return (
          <Html
            position={[x, 10, z]}
            fontSize={fontSize}
            color="white"
            anchorX="center"
            anchorY="middle"
            rotation={[rotationX, rotationY, 0]}
            children={component}
          />
        );
      })}
    </>
  );
};

export default Texts;
