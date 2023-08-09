import React from "react";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";

const Welcome = () => {
  return (
    <div>
      <Stack
        direction="column"
        justifyContent={"center"}
        alignItems={"center"}
        spacing={1}
        sx={{
          background:"red"
        }}
      >
        <Box fontSize={12} color={"white"}>
          Welcome Back
        </Box>
        <Box fontSize={28} color={"white"}>
          Emmanuel
        </Box>
        <Box sx={{ color: "#574a" }}>What is the moto of you day</Box>
      </Stack>
    </div>
  );
};

export default Welcome;
