import { Groups, Mail, Notifications } from "@mui/icons-material";
import {
	AppBar,
	Avatar,
	Badge,
	IconButton,
	InputBase,
	Menu,
	MenuItem,
	styled,
	Toolbar,
	Typography
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const MiddleContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: "0 10px",
  margin: "0 20px",
  borderRadius: theme.shape.borderRadius,
  flexGrow: 1,
  maxWidth: "500px",
}));

const RightSmContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const RightSmUpContainer = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <AppBar position="sticky">
      <ToolbarStyled>
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          Social App
        </Typography>
        <Groups
          fontSize="large"
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />

        <MiddleContainer>
          <InputBase sx={{ display: "flex" }} placeholder="search..." />
        </MiddleContainer>

        <RightSmContainer onClick={(el) => setAnchorEl(el.currentTarget)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography component="span">John</Typography>
        </RightSmContainer>
        <RightSmUpContainer>
          <IconButton color="inherit" sx={{ p: 0 }}>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
          </IconButton>
          <IconButton color="inherit" sx={{ p: 0 }}>
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton sx={{ p: 0 }}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              onClick={(el) => setAnchorEl(el.currentTarget)}
            />
          </IconButton>
        </RightSmUpContainer>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{ mt: 0.5 }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </ToolbarStyled>
    </AppBar>
  );
}
