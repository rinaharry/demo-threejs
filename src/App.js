import React, { useState } from "react";

import { Canvas } from "@react-three/fiber";
import Box from "@mui/material/Box";

const Menu = React.lazy(() => import("./components/Menu/Menu"));
const ThreeScene = React.lazy(() =>
  import("./components/ThreeScene/ThreeScene")
);

const App = () => {
  const [step, setStep] = useState(-1);
  const RotateCamera = () => {
    setStep((i) => (i = (i + 1) % 6));
  };

  return (
    <div style={{ height: "100vh" }}>
      <Box
        sx={{
          position: "absolute",
          zIndex: 222,
          padding: 2,
          height: "98%",
        }}
        onClick={() => RotateCamera()}
      >
        <Menu />
      </Box>
      <Canvas flat linear camera={{ position: [0, 0, 2] }}>
        <ThreeScene step={step} />
      </Canvas>
    </div>
  );
};

export default App;
