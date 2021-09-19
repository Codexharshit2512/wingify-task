import React from "react";

const Day = ({ value, change }) => {
  return (
    <div className="month_field date">
      <label className="form_label">Month</label>
      <div className="month_field_container">
        <select
          onChange={(e) => change(e)}
          className="date_inp"
          name="month"
          id="month"
          value={value}
        >
          <option value="january">Janaury</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">August</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
        </select>
      </div>
    </div>
  );
};

export default Day;
