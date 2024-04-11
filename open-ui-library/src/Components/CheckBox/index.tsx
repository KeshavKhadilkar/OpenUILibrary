import { ICheckBoxProps } from "../../Interface";

export const CheckBox: React.FC<ICheckBoxProps> = (props) => {
  return (
    <div>
      {!props.renderpositionend && (
        <input
          type="checkbox"
          disabled={props.disabled}
          checked={props.checked}
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
