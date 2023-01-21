import { Typography, styled } from "@mui/material";

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.3rem",
  color: "#1C1C1D",
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: theme.spacing(2),
}));

export default FooterTitle;
