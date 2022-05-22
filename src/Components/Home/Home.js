import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import "./Home.css";
import LastSection from "./LastSection";
import Parts from "./Parts";
import TwoSection from "./TwoSection";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TwoSection></TwoSection>
      <Parts></Parts>
      <LastSection></LastSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
