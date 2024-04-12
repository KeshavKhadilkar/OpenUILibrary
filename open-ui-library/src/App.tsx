import React from "react";
import "./App.css";
// import { TextFieldUsage } from "./Pages/TextBox";
// import { CheckBoxUsage } from "./Pages/Checkbox";
// import { RadioGroupUsage } from "./Pages/RadioGroup";
import { DropDownUsage } from "./Pages/DropDown";
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
            <strong>Usage of the Check Box Component</strong>
          </label>
          <br></br>
          <br></br>
          <hr></hr>
          <div className="app-body">
            {/* <TextFieldUsage /> */}
            {/* <CheckBoxUsage/> */}
            {/* <RadioGroupUsage /> */}
            <DropDownUsage />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
