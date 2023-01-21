import { Box, Container } from "@mui/material";
import Navbar from "./navbar";
import Hero from "./hero";

function Header() {
  return (
    <Box bgcolor="#E6F0FF" mb={10}>
      <Container>
        <Navbar />
        <Hero />
      </Container>
    </Box>
  );
}

export default Header;
