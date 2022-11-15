import React, { Fragment } from "react";
import CartSection from "../components/CartSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NftSection from "../components/NftSection";
import RatingSection from "../components/RatingSection";



const Home = () => {
  return (
    <Fragment>
      < Header />
      < Hero />
      < CartSection />
      < RatingSection />
      < NftSection />
      < Footer />
    </Fragment>
  );
};

export default Home;
