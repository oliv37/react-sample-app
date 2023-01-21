import { Box, Typography } from "@mui/material";
import starsImg from "../../assets/Star.png";

function CompanyRating() {
  return (
    <Box>
      <img src={starsImg} alt="stars" css={{ maxWidth: "100%" }} />
      <Typography
        variant="body2"
        sx={{
          color: "#7D8589",
          fontSize: "1rem",
          fontWeight: "fontWeightBold",
          mt: 2,
        }}
      >
        5-Star Rating (2k+ Reviews)
      </Typography>
    </Box>
  );
}

export default CompanyRating;
