import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      {/* <img src="/static/images/aaron-irizarry.jpg" alt="first speaker" />
      <img src="/static/images/adam-connor.jpg" alt="first speaker" /> */}
      <ImageToggleOnMouseOver primaryImg="/static/images/aaron-irizarry.jpg"
      secondaryImg="/static/images/adam-connor.jpg"
      alt="" />
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;
