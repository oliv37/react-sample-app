import { Box } from "@mui/material";
import heroImg from "../../../assets/hero_illustration.png";

function HeroRight() {
  return (
    <Box flex={1} textAlign="center">
      <img src={heroImg} alt="heroImg" style={{ maxWidth: "100%" }} />
    </Box>
  );
}

export default HeroRight;
