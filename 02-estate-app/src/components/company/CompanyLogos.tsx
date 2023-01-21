import { Box } from "@mui/material";
import logosImg from "../../assets/logos.png";

function CompanyLogos() {
  return (
    <Box textAlign="center">
      <img src={logosImg} alt="logos" css={{ maxWidth: "100%" }} />
    </Box>
  );
}

export default CompanyLogos;
