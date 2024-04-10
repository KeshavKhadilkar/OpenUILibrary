import React from "react";
import "./App.css";
import TextField from "./Components/TextField";
import { TextFieldTypes } from "./Interface";

const App: React.FC = () => {

  const onTestingChange = (e: any)=>{
    console.log(e);
  }
  return (
    <>
      <TextField type={TextFieldTypes.password}
      name="testing"
      id="testing"
      onChange={onTestingChange}
      placeholder= "enter the testing value"
      error="enterd values not correct"
      />
    </>
  );
};

export default App;
