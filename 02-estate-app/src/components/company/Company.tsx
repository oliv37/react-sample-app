import { Box, Container, styled } from "@mui/material";
import CompanyLogos from "./CompanyLogos";
import CompanyRating from "./CompanyRating";
import CompanyReference from "./CompanyReference";

const CompanyBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  marginBottom: theme.spacing(4),
  gap: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "left",
    marginBottom: 0,
    gap: 0,
  },
}));

function Company() {
  return (
    <Container>
      <CompanyBox>
        <CompanyReference />
        <CompanyRating />
      </CompanyBox>
      <CompanyLogos />
    </Container>
  );
}

export default Company;
