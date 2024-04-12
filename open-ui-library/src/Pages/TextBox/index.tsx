import TextField from "../../Components/TextField";
import { TextFieldTypes } from "../../Interface";

export const TextFieldUsage: React.FC = () => {
  const onTestingChange = (e: any) => {
    console.log(e);
  };
  return (
    <>
      <TextField
        type={TextFieldTypes.text}
        name="Standard"
        id="standard"
        onChange={onTestingChange}
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
      <TextField type={TextFieldTypes.password} name="Password" id="required" />
    </>
  );
};

export default TextFieldUsage;