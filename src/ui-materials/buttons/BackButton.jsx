import React from "react";
import ArrowBack from "../svg/ArrowBack";


const BackButton = ({ text, children, extraClasses, ...rest }) => {
  return (
    <button
      className={`${extraClasses ?? ''} 
        font-semibold flex items-center space-x-4`}
      {...rest}
    >
        <ArrowBack />
        {text ? text : children}
    </button>
  );
};

export default BackButton;