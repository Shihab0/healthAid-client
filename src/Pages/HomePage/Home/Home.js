import React from "react";
import useTitle from "../../../hooks/useTitle";
import Carousel from "../Carousel/Carousel";

import Services from "../Services/Services";
import Stat from "../Stat/Stat";
import GetInTouch from "./GetInTouch/GetInTouch";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Carousel></Carousel>
      <Stat></Stat>
      <Services></Services>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default Home;
