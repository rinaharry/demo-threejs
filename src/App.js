import React, { useState,useRef } from "react";

import { Canvas } from "@react-three/fiber";
import Box from "@mui/material/Box";
import StepContext from "./@core/ context/stepContext";

const Menu = React.lazy(() => import("./components/Menu/Menu"));
const ThreeScene = React.lazy(() =>
  import("./components/ThreeScene/ThreeScene")
);

const App = () => {
  const [menuStep, setStep] = useState(-1);
  const canvasRef = useRef();
  return (
    <StepContext.Provider  value={{menuStep,setStep}}  >
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
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
        }}
        camera={{
          position: [0, -3, 40],
          fov: (window.innerHeight * 65) / 935,
          far: 1000,
          near: 0.001,
        }}
        ref={canvasRef}
      >
        <ThreeScene/>
      </Canvas>
    </div>
    </StepContext.Provider >
  );
};

export default App;
