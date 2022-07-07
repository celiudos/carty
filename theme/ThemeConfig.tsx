// material
import { CssBaseline, ThemeOptions } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import ThemeTypography from "./ThemeTypography";

// ----------------------------------------------------------------------

type ThemeConfigType = {
  children: JSX.Element;
};

//https://bareynol.github.io/mui-theme-creator/

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#5893df",
    },
    secondary: {
      main: "#ccc",
    },
    background: {
      default: "#fcfcfc",
      // paper: "#24344d",
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFF",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          borderTop: "1px dashed #E2E2E2",
        },
      },
    },
  },
  typography: ThemeTypography as TypographyOptions,
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
