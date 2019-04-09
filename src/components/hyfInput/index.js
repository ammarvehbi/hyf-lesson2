import React from "react";

const hyfInput = ({
  type,
  name,
  placeholder,
  label,
  buttonTitle,
  handleChange
}) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={buttonTitle}
        onChange={handleChange}
      />
    </React.Fragment>
  );
};

export default hyfInput;
