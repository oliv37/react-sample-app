import { Box } from "@mui/material";
import logoImg from "../../../../assets/logo.png";
import NavLink from "../NavLink";

function NavBarLeftDesktop() {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
        alignItems: "center",
        justifyContent: "center",
        gap: "2.5rem",
      }}
    >
      <img src={logoImg} alt="logo" css={{ cursor: "pointer" }} />
      <Box sx={{ display: "flex", gap: 3 }}>
        <NavLink variant="body2">Home</NavLink>
        <NavLink variant="body2">Features</NavLink>
        <NavLink variant="body2">Services</NavLink>
        <NavLink variant="body2">Listed</NavLink>
        <NavLink variant="body2">Contact</NavLink>
      </Box>
    </Box>
  );
}

export default NavBarLeftDesktop;
