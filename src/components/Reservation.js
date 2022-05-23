import React from "react";
import Button from "./Button";

const Reservation = () => {
  return (
    <div className='reservation'>
      <h2 className='section__heading section__heading--footer'>
        Ready to make a reservation?
      </h2>
      <Button className='btn btn--footer' text='book a table' />
    </div>
  );
};

export default Reservation;
