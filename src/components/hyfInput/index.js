import React from "react";

const hyfInput = ({ type, name, placeholder, label, buttonTitle }) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={buttonTitle}
      />
    </React.Fragment>
  );
};

export default hyfInput;
