import { Box, Stack, ThemeProvider } from "@mui/material";
import Leftbar from "./components/bar/Leftbar";
import Navbar from "./components/bar/Navbar";
import Rightbar from "./components/bar/Rightbar";
import MainPanel from "./components/MainPanel";
import { useDarkLightTheme } from "./hooks";

function App() {
  const { theme, toggleMode } = useDarkLightTheme();

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Leftbar toggleMode={toggleMode} />
          <MainPanel />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
