import React, { useState } from "react";
import TextInput from "./TextInput";
import RadioGroup from "./RadioGroup";
import Radio from "./Radio";
import Day from "./Day";
import Month from "./Month";
import Year from "./Year";
import SubmitBtn from "./SubmitBtn";
const initState = {
  email: "",
  date: {
    day: 1,
    month: "march",
    year: 1995,
  },
  password: "",
  choice: "individual",
};

const Form = () => {
  const [state, setState] = useState({ ...initState });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const handleChange = (e, type) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };
  const handleDateChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, date: { ...state.date, [name]: value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = { ...errors };
    const re1 =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const re2 = /^[0-9]+$/;
    if (!re1.test(state?.email)) obj.email = true;
    else obj.email = false;
    if (!re2.test(state?.password)) obj.password = true;
    else obj.password = false;
    setErrors(obj);
    if (!obj.email && !obj.password) {
      window.alert(JSON.stringify(state));
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Create an account</h2>
      <TextInput
        label="Enter your email"
        type="text"
        value={state.email}
        msg="Please add valid email address"
        change={handleChange}
        error={errors?.email}
        name="email"
      />
      <div className="form_group">
        <div className="form_label">Date of birth(Optional)</div>
        <div className="row">
          <Day value={state?.date?.day} change={handleDateChange} />
          <Month value={state?.date?.month} change={handleDateChange} />
          <Year value={state?.date?.year} change={handleDateChange} />
        </div>
      </div>
      <TextInput
        label="Choose a strong password"
        type="password"
        value={state?.password}
        msg="Password must have a numeric value"
        change={handleChange}
        error={errors?.password}
        name="password"
      />
      <div className="form_group">
        <div className="form_label">Are you an agency or an individual?</div>
        <RadioGroup choice={state?.choice} change={handleChange}>
          <Radio label="Individual" value="individual" />
          <Radio label="Agency" value="agency" />
        </RadioGroup>
      </div>
      <SubmitBtn />
    </form>
  );
};

export default Form;
