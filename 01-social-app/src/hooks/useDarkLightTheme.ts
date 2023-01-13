import { createTheme, PaletteMode } from "@mui/material";
import { useCallback, useMemo, useState } from "react";


export default function useDarkLightTheme(defaultMode: PaletteMode = "light") {
  const [mode, setMode] = useState<PaletteMode>(defaultMode);

  const toggleMode = useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );

  return { theme, toggleMode };
}