import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

import FooterIcons from "./FooterIcons";
import FooterLink from "./FooterLink";
import FooterTitle from "./FooterTitle";

const FooterContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  gap: theme.spacing(5),
  margin: theme.spacing(13, "auto", 10, "auto"),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
    marginTop: theme.spacing(10),
  },
}));

const FooterLinksBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const FooterSecondaryText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: "#7A7A7E",
  fontWeight: theme.typography.fontWeightMedium,
  marginBottom: theme.spacing(2),
}));

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksBox>
        <FooterTitle>Products</FooterTitle>
        <FooterLink>Listing</FooterLink>
        <FooterLink>Properties</FooterLink>
        <FooterLink>Agents</FooterLink>
        <FooterLink>Blog</FooterLink>
      </FooterLinksBox>

      <FooterLinksBox>
        <FooterTitle>Resources</FooterTitle>
        <FooterLink>Our Homes</FooterLink>
        <FooterLink>Stories</FooterLink>
        <FooterLink>Video</FooterLink>
        <FooterLink>Free Trial</FooterLink>
      </FooterLinksBox>

      <FooterLinksBox>
        <FooterTitle>Company</FooterTitle>
        <FooterLink>Partnerships</FooterLink>
        <FooterLink>Terms of use</FooterLink>
        <FooterLink>Privacy</FooterLink>
        <FooterLink>Sitemap</FooterLink>
      </FooterLinksBox>

      <Box>
        <FooterTitle>Get in touch</FooterTitle>
        <FooterSecondaryText>
          You’ll find your next home, in any style you prefer.
        </FooterSecondaryText>
        <FooterIcons />
      </Box>
    </FooterContainer>
  );
}

export default Footer;
