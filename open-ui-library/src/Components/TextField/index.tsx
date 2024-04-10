import { HTMLInputTypeAttribute } from "react";
import { ITextFieldProps } from "../../Interface";
import "./index.css";

const TextField: React.FC<ITextFieldProps> = (props) => {
  return (
    <div className="text-field-grid">
      <label className="text-field-label">
        {props.name}
        {props.required && <div className="input-field-required">*</div>}
      </label>
      <div className="input-field-wrapper">
        <input
          type={props.type as unknown as HTMLInputTypeAttribute}
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          className={`${props.style} text-field-class`}
          placeholder={props.placeholder}
          disabled={props.disabled}
        />
      </div>
      <div className="input-field-error">{props.error}</div>
    </div>
  );
};

export default TextField;
