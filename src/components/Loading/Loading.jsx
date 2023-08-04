import React from "react";
import PropTypes from "prop-types";

import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import profile1 from "../../images/profil.png";
import profile2 from "../../images/profil1.png";
import profile3 from "../../images/profil2.png";
import profile4 from "../../images/profil3.png";
import profile5 from "../../images/profil4.png";

const LinearProgressWithLabel = (props) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center" }}
      flexDirection="column"
      my={2}
    >
      <Box sx={{ minWidth: 35 }}>
        <Typography
          sx={{ fontStyle: "italic", fontSize: 55 }}
          variant="body2"
          color="white"
        >
          WimiTim
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="white">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

const Loading = () => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      height="100%"
      width="100%"
      overflow="hidden"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      bgcolor={"black"}
      px={5}
    >
      <Stack direction="row" spacing={2} mx={"10%"}>
        <Box sx={{ width: "100%" }}>
          <img src={profile1} alt={"ddddd"} />
        </Box>
        <Box sx={{ width: "100%" }}>
          <img src={profile2} alt={"ddddd"} />
        </Box>
        <Box sx={{ width: "100%" }}>
          <img src={profile3} alt={"ddddd"} />
        </Box>
        <Box sx={{ width: "100%" }}>
          <img src={profile1} alt={"ddddd"} />
        </Box>
      </Stack>
      <LinearProgressWithLabel value={progress} />

      <Stack direction="row" spacing={2} mx={"10%"}>
        <Box sx={{ width: "100%" }}>
          <img src={profile4} alt={"ddddd"} />
        </Box>
        <Box sx={{ width: "100%" }}>
          <img src={profile5} alt={"ddddd"} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Loading;
