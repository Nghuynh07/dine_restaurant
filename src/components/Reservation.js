import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const Reservation = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/book");
  };
  return (
    <div className='reservation'>
      <h2 className='section__heading section__heading--footer'>
        Ready to make a reservation?
      </h2>
      <Button
        onClick={onClick}
        className='btn btn--footer'
        text='book a table'
      />
    </div>
  );
};

export default Reservation;
