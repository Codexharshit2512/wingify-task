import React from "react";

const TextInput = ({ label, value, change, msg, type, error, name }) => {
  return (
    <div className="form_group">
      <label className="form_label">{label}</label>
      <div className="input_field_container">
        <input
          className={`${error ? "error" : ""}`}
          onChange={(e) => change(e)}
          id="custom_input"
          type={`${type}`}
          value={value}
          name={name}
        />
        {error && <div className="error_msg">{msg}</div>}
      </div>
    </div>
  );
};

export default TextInput;
