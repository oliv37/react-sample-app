import { Box, Container } from "@mui/material";
import PropertyListItem from "./PropertyListItem";
import PropertyTitle from "./PropertyTitle";

function Property() {
  return (
    <Box mt={5} py={10} bgcolor="#F5FAFE">
      <Container>
        <PropertyTitle />
        <PropertyListItem />
      </Container>
    </Box>
  );
}

export default Property;
