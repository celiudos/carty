// material
import { CssBaseline, ThemeOptions } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";

// ----------------------------------------------------------------------

type ThemeConfigType = {
  children: JSX.Element;
};

//https://bareynol.github.io/mui-theme-creator/

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#5893df",
    },
    secondary: {
      main: "#2ec5d3",
    },
    background: {
      default: "#192231",
      paper: "#24344d",
    },
  },
};

// export const themeOptions: ThemeOptions = {
//   palette: {
//       background: {
//         default: "#ddd",
//       },
//   },
// };

export default function ThemeConfig({
  children,
}: ThemeConfigType): JSX.Element {
  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
