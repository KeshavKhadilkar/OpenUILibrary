import { useEffect, useRef, useState } from "react";
import { IDropDownOption, IDropDownProps } from "../../Interface";
import "./index.css";

const DropDown: React.FC<IDropDownProps> = (props) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [selectedOptions, setselectedOptions] = useState<string[]>([]);
  const [selectedkey, setselectedkey] = useState<string[]>([]);
  const [displayOptions, setdisplayOptions] = useState<boolean>(false);
  const onOptionSelect = (e: any, option: IDropDownOption) => {
    if (props.multiselect) {
      const updatedOptions = selectedOptions.includes(option.name)
        ? selectedOptions.filter((item) => item !== option.name)
        : [...selectedOptions, option.name];
      setselectedOptions(updatedOptions);
      const updatedKeys = selectedkey.includes(option.key)
        ? selectedkey.filter((item) => item !== option.key)
        : [...selectedkey, option.key];
      setselectedkey(updatedKeys);
    } else {
      setselectedOptions([option.name]);
      setselectedkey([option.key]);
    }
    console.log(option);
    props.onOptionSelect && props.onOptionSelect(e, option.key);
  };

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (
        outerRef.current &&
        !outerRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setdisplayOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="input-dropdown">
        <div className="input-dropdown-selector">
          <label>{props.name}</label>
          <div className="input-dropdown-selected-details">
            <input
              id={props.id}
              readOnly
              value={selectedOptions.join(";")}
              onClick={() => setdisplayOptions(!displayOptions)}
              disabled={true}
            />
            <button
              ref={buttonRef}
              className="input-dropdown-select"
              onClick={() => setdisplayOptions(!displayOptions)}
              disabled={props.disabled}
            >
              Options
            </button>
          </div>
        </div>
        <div
          ref={outerRef}
          className={`${
            !displayOptions
              ? "input-dropdown-options-close"
              : "input-dropdown-options-open"
          }`}
        >
          {props.options &&
            props.options.map((option: IDropDownOption) => {
              return (
                <div key={option.key} className="input-dropdown-option">
                  <input
                    name={option.name}
                    key={option.key}
                    type="checkbox"
                    checked={selectedkey.includes(option.key)}
                    onChange={(e) => onOptionSelect(e, option)}
                  />
                  <label htmlFor={option.key}>{option.name}</label>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default DropDown;
