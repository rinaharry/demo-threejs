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
          gl={{ preserveDrawingBuffer: true }}
        >

          <ThreeScene />
          {/* <Environment files={bg} background /> */}
        </Canvas>
      </div>
    </StepContext.Provider>
  );
};

export default App;
