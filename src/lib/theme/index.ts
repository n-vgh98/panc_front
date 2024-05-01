import { createTheme } from "@mui/material/styles";
import { Kanit } from "next/font/google";
import components from "./components";

export const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#1fc7d4",
      contrastText: "#fff",
    },
    secondary: {
      main: "#7645d9",
    },
    success: {
      main: "#31d0aa",
    },
    error: {
      main: "#ed4b9e",
    },
    warning: {
      main: "#ffb237",
    },
    text: {
      primary: "#280d5f",
      secondary: "#7a6eaa",
      disabled: "#bdc2c4",
    },
    divider: "#e7e3eb",

    // custom
    deluge: {
      main: "#7a6eaa",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: kanit.style.fontFamily,
  },
  components,
});

export default theme;

declare module "@mui/material/styles" {
  interface Palette {
    deluge: Palette["primary"];
  }
  interface PaletteOptions {
    deluge?: PaletteOptions["primary"];
  }
}

declare module "@mui/material" {
  interface ButtonGroupPropsColorOverrides {
    deluge: true;
  }
  interface ButtonPropsColorOverrides {
    deluge: true;
  }
}
