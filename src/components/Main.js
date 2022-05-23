import React from "react";
import About from "./About";
import Events from "./Events";
import Highlights from "./Highlights";
import Reservation from "./Reservation";

const Main = () => {
  return (
    <main className='main'>
      <About />
      <Highlights />
      <Events />
      <Reservation />
    </main>
  );
};

export default Main;
