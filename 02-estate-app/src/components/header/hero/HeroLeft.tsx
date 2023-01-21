import { styled } from "@mui/material";
import { Box, Typography } from "@mui/material";
import CustomButton from "../../common/CustomButton";

const Greeting = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  color: "#687690",
  fontWeight: theme.typography.fontWeightMedium,
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(4),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  color: "#000336",
  fontWeight: theme.typography.fontWeightBold,
  margin: theme.spacing(4, 0, 4, 0),
  [theme.breakpoints.up("sm")]: {
    fontSize: "64px",
  },
}));

const P = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: "#5A6473",
  margin: theme.spacing(4, 0, 4, 0),
}));

function HeroLeft() {
  return (
    <Box flex={1}>
      <Greeting variant="body2">Welcome to Besnik Agency</Greeting>
      <Title variant="h1">Discover a place where you'll love to live.</Title>
      <P variant="body2">
        Be the first to get the best real estate deals before they hit the mass
        market! Hot foreclosure deals with one simple search!
      </P>
      <CustomButton backgroundColor="#0F1B4C" textColor="#fff" heroBtn>
        More About Us
      </CustomButton>
    </Box>
  );
}

export default HeroLeft;
