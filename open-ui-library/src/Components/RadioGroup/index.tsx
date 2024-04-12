import { useEffect, useState } from "react";
import { IRadioGroupOptions, IRadioGroupProps } from "../../Interface/";

export const RadioGroup: React.FC<IRadioGroupProps> = (props) => {
  const [selectedoption, setselectedoption] = useState<string>();
  const selectionChange = (e: any, key: string) => {
    setselectedoption(key);
    props.onselectionchange && props.onselectionchange(e, key);
  };

  useEffect(() => {
    props.defaultselected && setselectedoption(props.defaultselected);
  }, [props.defaultselected]);

  return (
    <div>
      {props.options.length > 0 &&
        props.options.map((e: IRadioGroupOptions) => {
          return (
            <div key={e.key}>
              <input
                type="radio"
                key={e.key}
                checked={e.key == selectedoption}
                id={e.id}
                onChange={(event: any) => {
                  selectionChange(event, e.key);
                }}
              />
              <label>{e.name}</label>
            </div>
          );
        })}
    </div>
  );
};
