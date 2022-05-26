import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import "./Home.css";
import LastSection from "./LastSection";
import Parts from "./Parts";
import TwoSection from "./TwoSection";
import UserReview from "./UserReview";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TwoSection></TwoSection>
      <Parts></Parts>
      <UserReview></UserReview>
      <LastSection></LastSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
