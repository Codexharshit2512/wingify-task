import React from "react";

const Day = ({ value, change }) => {
  return (
    <div className="day_field date">
      <label className="form_label">Day</label>
      <div className="day_field_container">
        <input
          onChange={(e) => change(e)}
          className="day date_inp"
          value={value}
          type="number"
          min="0"
          max="31"
          name="day"
        />
      </div>
    </div>
  );
};

export default Day;
