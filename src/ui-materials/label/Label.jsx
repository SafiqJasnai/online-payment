import React from "react";

const Label = ({ text, children, extraClasses, ...rest }) => {
  return (
    <label
      className={`${extraClasses ?? ''} text-2xl font-extrabold leading-none tracking-tight`}
      {...rest}
    >
      {text ? text : children}
    </label>
  );
};

export default Label;
