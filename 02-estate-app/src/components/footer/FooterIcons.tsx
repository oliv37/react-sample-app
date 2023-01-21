import { Box, styled } from "@mui/material";
import fbIcon from "../../assets/fbicon.png";
import linkedinIcon from "../../assets/linkedinicon.png";
import twitterIcon from "../../assets/twittericon.png";

const FooterIconsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  [theme.breakpoints.up("sm")]: {
    justifyContent: "stretch",
  },
}));

const FooterIcon = styled("img")({
  cursor: "pointer",
});

function FooterIcons() {
  return (
    <FooterIconsBox>
      <FooterIcon src={fbIcon} alt="fbIcon" />
      <FooterIcon src={twitterIcon} alt="twitterIcon" />
      <FooterIcon src={linkedinIcon} alt="linkedinIcon" />
    </FooterIconsBox>
  );
}

export default FooterIcons;
