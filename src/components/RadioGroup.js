import React from "react";

const RadioGroup = ({ children, choice, change }) => {
  return (
    <div className="radio_group_container">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { choice, change });
        }
      })}
    </div>
  );
};

export default RadioGroup;
