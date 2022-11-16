import React, { Fragment } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PlaceList from "./components/PlaceList/PlaceList";

import PlaceNav from "./components/PlaceNav/PlaceNav";





const Place = () => {
  return (
    <Fragment>
      < Header />
      < PlaceNav />
      < PlaceList />
    
      < Footer />
      
    </Fragment>
  );
};

export default Place;
