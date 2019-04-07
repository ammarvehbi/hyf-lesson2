import React from "react";

const hyfSelect = ({ name, label, options }) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <select>
        {options.map(opt => {
          return <option value={opt}>{opt}</option>;
        })}
      </select>
    </React.Fragment>
  );
};

export default hyfSelect;
