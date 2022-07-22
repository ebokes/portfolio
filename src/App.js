import React, { Fragment, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import Layout from "./components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";

const theme = {
  color: {
    green1: "#00102e",
    green2: "#ffd00a",
    // green2: "#feb72b",
    green3: "#2F7A85",
    green4: "#1f525a",
    black: "#000",
    white: "#fff",
    transparent: "transparent",
  },

  screens: {
    xsm: "414px",
    sm: "600px",
    md: "768px",
    lg: "960px",
    xl: "1280px",
  },
};

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
