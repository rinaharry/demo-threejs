import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import Typography from "@mui/material/Typography";
import StepContext from "../../@core/ context/stepContext";
const steps = [
  {
    label: "welcome",
    description: "",
  },
  {
    label: "Your weather",
    description: "",
  },
  {
    label: "Birthday",
    description: "",
  },

  {
    label: "News arrivals",
    description: "",
  },

  {
    label: "Directors word",
    description: "",
  },

  {
    label: "WimTim",
    description: "",
  },
];

const Menu = () => {
  const { menuStep, setStep } = React.useContext(StepContext);
  const handleNext = (val) => {
    // setActiveStep(val);
    console.log(val);
    setStep(val)
  };

  return (
    <Box sx={{ maxWidth: 400, height: "100%" }}>
      <Stepper
        activeStep={menuStep}
        orientation="vertical"
        sx={{
          flexDirection: "column-reverse",
          height: "100%",
          ".MuiStepConnector-line": { height: "100%" },
        }}
      >
        {steps.map((step, index) => (
          <Step
            key={step.label}
            sx={{ ".MuiStepConnector-line": { height: "100%" } }}
          >
            <StepLabel
              onClick={() => handleNext(index)}
              sx={{
                ">*": {
                  color: "white",
                  height: "100%",
                  ".MuiStepConnector-line": {
                    height: "100%",
                  },
                },
              }}
            >
              <Typography variant="caption" color={"white"}>
                {step.label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default Menu;
