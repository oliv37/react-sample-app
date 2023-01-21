import { Box, styled } from "@mui/material";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const HeroContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(5),
  marginTop: theme.spacing(3),
  paddingBottom: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

function Hero() {
  return (
    <HeroContainer>
      <HeroLeft />
      <HeroRight />
    </HeroContainer>
  );
}

export default Hero;
