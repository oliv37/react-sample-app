import { Box, Typography } from "@mui/material";

function PropertyTitle() {
  return (
    <Box
      sx={{
        textAlign: {
          xs: "center",
          md: "left",
        },
      }}
    >
      <Typography
        sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
      >
        Featured Properties
      </Typography>
      <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
        Everything you need to know when looking for a new home!
      </Typography>
    </Box>
  );
}

export default PropertyTitle;
