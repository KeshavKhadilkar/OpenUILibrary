import React from "react";
import "./App.css";
import { SLiderUsage } from "./Pages/Slider";
import { StepperUsage } from "./Pages/Stepper";
import { PanelUsage } from "./Pages/Panel";
import { ButtonUsage } from "./Pages/Button";
import { LinkUsage } from "./Pages/Link";
import LabelUsage from "./Pages/Label";
// // import { MessageBarUsage } from "./Pages/MessageBar";
// import { AccordionUsage } from "./Pages/Accordion";
// import { TextFieldUsage } from "./Pages/TextBox";
// import { CheckBoxUsage } from "./Pages/Checkbox";
// import { RadioGroupUsage } from "./Pages/RadioGroup";
// import { DropDownUsage } from "./Pages/DropDown";
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
            <strong>Usage of the MessgeBar Component</strong>
          </label>
          <br></br>
          <br></br>
          <hr></hr>
          <div className="app-body">
            {/* <TextFieldUsage /> */}
            {/* <CheckBoxUsage/> */}
            {/* <RadioGroupUsage /> */}
            {/* <DropDownUsage /> */}
            {/* <MessageBarUsage /> */}
            {/* <AccordionUsage /> */}
            {/* <SLiderUsage /> */}
            {/* <StepperUsage /> */}
            {/* <PanelUsage /> */}
            <ButtonUsage />
            <LinkUsage />
            <LabelUsage />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
