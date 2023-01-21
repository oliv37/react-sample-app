import {
	styled
} from "@mui/material";
import NavBarLeft from "./NavBarLeft";
import NavBarRight from "./NavBarRight";

const NavbarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(5),
  },
}));

export default function NavBar() {
  return (
    <NavbarContainer>
      <NavBarLeft />
      <NavBarRight />
    </NavbarContainer>
  );
}
