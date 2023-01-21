import { styled } from "@mui/material";

const FooterLink = styled("span")(({ theme }) => ({
  fontSize: "1rem",
  color: "#7A7A7E",
  fontWeight: "400",
  cursor: "pointer",
  "&:hover": {
    color: "#000",
  },
}));

export default FooterLink;
