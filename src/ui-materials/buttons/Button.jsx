import React from "react";

const Button = ({ text, children, extraClasses, ...rest }) => {
  return (
    <button
      className={`${extraClasses ?? ''} 
        py-2 px-4 font-semibold text-sm leading-none tracking-tight text-slate-50
        rounded shadow border border-indigo-500 bg-indigo-500
        hover:shadow-indigo-900 active:shadow-inner
        disabled:bg-gray-200 disabled:text-gray-500 disabled:shadow-none disabled:border-none disabled:hover:shadow-none`}
      {...rest}
    >
      {text ? text : children}
    </button>
  );
};

export default Button;
