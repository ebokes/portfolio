import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Project from "./Projects";
import { MainContainer } from "./reuseableComponents/contentStyle";
import Services from "./Services";
import TechStack from "./TechStack";

const Layout = () => {
  return (
    <MainContainer>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Project />
      <Contact />
      <Footer />
    </MainContainer>
  );
};

export default Layout;
