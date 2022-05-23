import React from "react";

const Image = ({ img, alt }) => {
  return (
    <div>
      <img src={img} alt={alt} />
    </div>
  );
};

export default Image;
