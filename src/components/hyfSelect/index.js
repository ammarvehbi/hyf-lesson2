import React from "react";

const hyfSelect = ({ name, label, options, handleChange }) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <select name={name} onChange={handleChange}>
        {options.map((opt, i) => {
          return (
            <option key={i} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
    </React.Fragment>
  );
};

export default hyfSelect;
