import { Box, styled } from "@mui/material";

const Divider = styled(Box)(({ theme }) => ({
  margin: "0 auto",
  width: "15%",
  height: "5px",
  backgroundColor: "#000339",
  [theme.breakpoints.up("md")]: {
    margin: 0,
  },
}));

export default Divider;
