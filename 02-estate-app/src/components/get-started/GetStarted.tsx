import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import homeIllustration from "../../assets/illustration.png";
import CustomButton from "../common/CustomButton";

const GetStartedBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#17275F",
  borderRadius: "15px",
  width: "90%",
  margin: theme.spacing(0, "auto"),
  padding: theme.spacing(3, 3, 0, 3),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    width: "100%",
    margin: theme.spacing(8, 0),
    paddingTop: 0,
  },
}));

const GetStartedPrimaryText = styled(Typography)(({ theme }) => ({
  fontSize: "2.2rem",
  color: "#fff",
  fontWeight: theme.typography.fontWeightBold,
}));

const GetStartedSecondaryText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: "#ccc",
  fontWeight: theme.typography.fontWeightMedium,
  margin: theme.spacing(3, 0),
}));

const GetStartedIllustration = styled("img")({
  maxWidth: "100%",
});

function GetStarted() {
  return (
    <Container>
      <GetStartedBox>
        <Box>
          <GetStartedPrimaryText>Featured Properties</GetStartedPrimaryText>
          <GetStartedSecondaryText>
            Everything you need to know about houses!
          </GetStartedSecondaryText>
          <CustomButton
            backgroundColor="#fff"
            textColor="#17275F"
            getStartedBtn
          >
            Get Started Now
          </CustomButton>
        </Box>
        <GetStartedIllustration src={homeIllustration} alt="illustration" />
      </GetStartedBox>
    </Container>
  );
}

export default GetStarted;
