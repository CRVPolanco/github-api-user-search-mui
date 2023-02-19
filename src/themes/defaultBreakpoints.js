import { createTheme } from "@mui/material";

const defaultBreakpoints = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      modernMobile: 425,
      tablet: 768,
      laptop: 1024,
      desktop: 1440,
    }
  }
});

export default defaultBreakpoints;
