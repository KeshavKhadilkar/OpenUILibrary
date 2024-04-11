import React from "react";
import "./App.css";
import { RadioGroup } from "./Components/RadioGroup";
import { IRadioGroupOptions } from "./Interface";
// import { TextFieldUsage } from "./Pages/TextBox";
// import { CheckBoxUsage } from "./Pages/Checkbox";
/*
Test your components in this place
describing the usage of the created common component
*/
const App: React.FC = () => {
  const RadioGroupOption: IRadioGroupOptions[] = [
    { key: "optionone", name: "Option 1" },
    { key: "optiontwo", name: "Option 2" },
    { key: "optionthree", name: "Option 3" },
    { key: "optionfour", name: "Option 4" },
  ];
  const onselectionchange = (e: any, key: string) => {
    console.log(e);
    console.log(key);
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
            {/* <TextFieldUsage /> */}
            {/* <CheckBoxUsage/> */}
            <RadioGroup
              options={RadioGroupOption}
              onselectionchange={onselectionchange}
              defaultselected="optionthree"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
