import React, { useState, useRef } from "react";

import { Canvas } from "@react-three/fiber";
import Box from "@mui/material/Box";
import StepContext from "./@core/ context/stepContext";

import { OrbitControls, Environment } from "@react-three/drei";
import bg from "./images/background.hdr";

const Menu = React.lazy(() => import("./components/Menu/Menu"));
const ThreeScene = React.lazy(() =>
  import("./components/ThreeScene/ThreeScene")
);

const App = () => {
  const [menuStep, setStep] = useState(-1);

  return (
    <StepContext.Provider value={{ menuStep, setStep }}>
      <div style={{ height: "100vh" }}>
        <Box
          sx={{
            position: "absolute",
            zIndex: 222,
            padding: 2,
            height: "98%",
          }}
        >
          <Menu />
        </Box>
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{
            position: [0, -3, 50],

            fov: (window.innerHeight * 65) / 935,
            far: 1000,
            near: 0.001,
            //  fov: 30
          }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <OrbitControls
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />

          <ThreeScene />
          <Environment files={bg} background />
        </Canvas>
      </div>
    </StepContext.Provider>
  );
};

export default App;
