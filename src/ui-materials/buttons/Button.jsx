import React from "react";

const Button = ({ text, children, extraClasses, ...rest }) => {
  return (
    <button
      className={`${extraClasses ?? ''} 
        py-2 px-4 font-semibold text-sm leading-none tracking-tight text-slate-50
        rounded shadow border border-sky-900 bg-sky-900
        hover:shadow-sky-950 active:shadow-inner
        disabled:bg-sky-200 disabled:text-sky-500 disabled:shadow-none disabled:border-none disabled:hover:shadow-none`}
      {...rest}
    >
      {text ? text : children}
    </button>
  );
};

export default Button;
