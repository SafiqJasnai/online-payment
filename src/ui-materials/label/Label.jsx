import React from "react";

const Label = ({ text, children, extraClasses, ...rest }) => {
  return (
    <label
      className={`${extraClasses ?? ''} text-lg font-bold leading-none tracking-tight`}
      {...rest}
    >
      {text ? text : children}
    </label>
  );
};

export default Label;
