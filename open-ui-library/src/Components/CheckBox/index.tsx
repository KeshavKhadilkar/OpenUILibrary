import { useEffect, useState } from "react";
import { ICheckBoxProps } from "../../Interface";
import "./index.css";

export const CheckBox: React.FC<ICheckBoxProps> = (props) => {
  const [ischecked, setischecked] = useState<boolean | undefined>(false);
  useEffect(() => {
    setischecked(props.checked);
  }, [props.checked]);
  return (
    <div className="checkbox-main">
      {!props.renderpositionend && (
        <input
          className="checkbox-input"
          type="checkbox"
          disabled={props.disabled}
          checked={ischecked}
          onChange={(e: any) => {
            setischecked(!ischecked);
            if (props.onChange) props.onChange(e);
          }}
        />
      )}
      <label>{props.name}</label>
      {props.renderpositionend && (
        <input
          type="checkbox"
          disabled={props.disabled}
          checked={props.checked}
        />
      )}
    </div>
  );
};
