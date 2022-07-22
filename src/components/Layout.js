import React, { Fragment } from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Project from "./Projects";
import Services from "./Services";
import TechStack from "./TechStack";

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Project />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Layout;
