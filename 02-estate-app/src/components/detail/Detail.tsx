import { styled } from "@mui/material";
import { Box, Container } from "@mui/system";
import DetailHeader from "./DetailHeader";
import DetailItem from "./DetailItem";

const DetailItemBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(7, 5, 0, 5),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: theme.spacing(5),
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

function Details() {
  return (
    <Container sx={{ py: 10 }}>
      <DetailHeader />
      <DetailItemBox>
        <DetailItem primaryText="2500+" secondaryText="Homes For Sale" />
        <DetailItem primaryText="3000+" secondaryText="Properties Rented" />
        <DetailItem primaryText="3500+" secondaryText="Homes Sold" />
      </DetailItemBox>
    </Container>
  );
}

export default Details;
