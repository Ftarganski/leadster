import React from "react";
import Hero from "../components/Hero/Hero";
import Content from "./Landing/Content";
import Advertise from "../components/Advertise/Advertise";
import Footer from "../components/Footer/Footer";

const Landing = () => {
  return (
    <>
      <Hero />
      <Content />
      <Advertise/>
      <Footer />
    </>
  );
};

export default Landing;
