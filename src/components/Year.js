import React from "react";

const Day = ({ value, change }) => {
  const generateYear = () => {
    const arr = [];
    for (let i = 0; i < 26; i++) {
      arr.push(1995 + i);
    }
    return arr;
  };
  return (
    <div className="year_field date">
      <label className="form_label">Year</label>
      <div className="year_field_container">
        <select
          onChange={(e) => change(e)}
          name="year"
          value={value}
          className="date_inp"
        >
          {generateYear().map((year) => (
            <option key={year} value={`${year}`}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Day;
