import React from "react";

const Button = ({ text, className, goTo }) => {
  return (
    <a href={goTo} className={className}>
      {text}
    </a>
  );
};

export default Button;
