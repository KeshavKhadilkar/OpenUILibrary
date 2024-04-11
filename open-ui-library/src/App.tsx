import React from "react";
import "./App.css";
import TextField from "./Components/TextField";
import { TextFieldTypes } from "./Interface";
import { TextFieldUsage } from "./Pages/TextBox";
import { CheckBoxUsage } from "./Pages/Checkbox";
/*
Test your components in this place
describing the usage of the created common component
*/
const App: React.FC = () => {
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
            {/* <TextFieldUsage /> */}
            <CheckBoxUsage/>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
