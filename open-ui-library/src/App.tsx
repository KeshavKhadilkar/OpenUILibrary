import React from "react";
import "./App.css";
import TextField from "./Components/TextField";
import { TextFieldTypes } from "./Interface";
/*
Test your components in this place
describing the usage of the created common component
*/
const App: React.FC = () => {
  const onTestingChange = (e: any) => {
    console.log(e);
  };
  return (
    <>
      <div className="app-main">
        <div style={{ width: "50%" }}>
          <label>
            <strong>Usage of the Text Field Component</strong>
          </label>
          <br></br>
          <br></br>
          <hr></hr>
          <div className="app-body">
            <TextField
              type={TextFieldTypes.text}
              name="Standard"
              id="standard"
            />
            <TextField
              type={TextFieldTypes.text}
              name="Disabled"
              id="disabled"
              disabled={true}
            />
            <TextField
              type={TextFieldTypes.text}
              name="Place Holder"
              id="placeholder"
              placeholder="Sample Place Holder"
            />
            <TextField
              type={TextFieldTypes.text}
              name="Error Message"
              id="placeholder"
              placeholder="Sample Place Holder"
              error="Field cannot be left blank"
            />
            <TextField
              type={TextFieldTypes.text}
              name="Required"
              id="required"
              required={true}
            />
            <TextField
              type={TextFieldTypes.password}
              name="Password"
              id="required"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
