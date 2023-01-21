import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import MenuMobile from "./MenuMobile";

function NavBarLeftMobile() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleDrawer(event: React.KeyboardEvent | React.MouseEvent) {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setMobileMenuOpen((prevMobileMenuOpen) => !prevMobileMenuOpen);
  }

  return (
    <Box
      sx={{
        display: {
          xs: "flex",
          md: "none",
        },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MenuIcon onClick={toggleDrawer} sx={{ cursor: "pointer", mr: 2 }} />
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={toggleDrawer}
        sx={{ "& .MuiDrawer-paper": { backgroundColor: "#E6F0FF" } }}
      >
        <MenuMobile toggleDrawer={toggleDrawer} />
      </Drawer>
    </Box>
  );
}

export default NavBarLeftMobile;
