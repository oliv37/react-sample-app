import { Box } from "@mui/material";
import CustomButton from "../../common/CustomButton";
import NavLink from "./NavLink";

function NavBarRight() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <NavLink variant="body2">Sign Up</NavLink>
      <CustomButton backgroundColor="#0F1B4C" textColor="#fff">
        Register
      </CustomButton>
    </Box>
  );
}

export default NavBarRight;
