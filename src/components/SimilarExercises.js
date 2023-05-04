import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ p: "24px" }}>
      <Box
        sx={{
          mt: { lg: "100px", xs: "0" },
        }}
      >
        <Typography
          sx={{ fontSize: { lg: "44px", xs: "25px" } }}
          fontWeight={700}
          color="#000"
        >
          Exercises that target the same muscle group
          <Stack
            direction="row"
            width="1400px"
            sx={{ p: "2", position: "relative", marginTop: "24px" }}
          >
            {targetMuscleExercises.length ? (
              <HorizontalScrollbar data={targetMuscleExercises} />
            ) : (
              <Loader />
            )}
          </Stack>
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "44px", xs: "25px" } }}
          fontWeight={700}
          mb={5}
        >
          Exercises that use the same equipment
          <Stack
            direction="row"
            width="1400px"
            sx={{ p: "2", position: "relative", marginTop: "24px" }}
          >
            {equipmentExercises.length ? (
              <HorizontalScrollbar data={equipmentExercises} />
            ) : (
              <Loader />
            )}
          </Stack>
        </Typography>
      </Box>
    </Box>
  );
};

export default SimilarExercises;
