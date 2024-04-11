import { RadioGroup } from "../../Components/RadioGroup";
import { IRadioGroupOptions } from "../../Interface";

export const RadioGroupUsage: React.FC = () => {
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
      <RadioGroup
        options={RadioGroupOption}
        onselectionchange={onselectionchange}
        defaultselected="optionthree"
      />
    </>
  );
};
