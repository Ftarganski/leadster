import React from "react";
import Hero from "../components/Hero/Hero";
import Main from "./Main/Main";
import Advertise from "../components/Advertise/Advertise";
import Footer from "../components/Footer/Footer";
import HeroLogo from "./HeroLogo/HeroLogo";

const Landing = () => {
  return (
    <>
      <HeroLogo />
      <Hero />
      <Main />
      <Advertise />
      <Footer />
    </>
  );
};

export default Landing;
