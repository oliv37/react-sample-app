import { styled, Typography } from "@mui/material";

const NavLink = styled(Typography)({
  fontSize: "14px",
  color: "#4F5361",
  fontWeight: "bold",
  cursor: "pointer",
  "&:hover": {
    color: "#111",
  },
});

export default NavLink;
