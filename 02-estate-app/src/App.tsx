import { createTheme, ThemeProvider } from "@mui/material";
import Company from "./components/company";
import Detail from "./components/detail";
import Guide from "./components/guide";
import Header from "./components/header";
import Property from "./components/property";
import GettingStarted from "./components/get-started";
import Footer from "./components/footer";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Company />
      <Guide />
      <Property />
      <Detail />
      <GettingStarted />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
