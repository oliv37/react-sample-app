import { Box, Typography } from "@mui/material";
import logoImg from "../../assets/logo.png";

function CompanyReference() {
  return (
    <Box>
      <img src={logoImg} alt="logo" style={{ maxWidth: "100%" }} />
      <Typography
        variant="body2"
        sx={{
          color: "#7D8589",
          fontSize: "1rem",
          fontWeight: "fontWeightBold",
          mt: 2,
        }}
      >
        More than 45,000 trust Besnik
      </Typography>
    </Box>
  );
}

export default CompanyReference;
