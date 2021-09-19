import React from "react";

const Radio = ({ label, choice, value, change }) => {
  return (
    <div className="radio_button">
      <input
        checked={choice === value}
        onChange={(e) => change(e)}
        type="radio"
        name="choice"
        value={value}
      />
      <label>{label}</label>
    </div>
  );
};

export default Radio;
