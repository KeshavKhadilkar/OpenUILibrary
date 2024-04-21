import DropDown from "../../Components/Dropdown";
import { IDropDownOption } from "../../Interface";

export const DropDownUsage: React.FC = () => {
  const dropDownOptions: IDropDownOption[] = [
    { key: "optionone", name: "Option 1" },
    { key: "optiontwo", name: "Option 2" },
    { key: "optionthree", name: "Option 3" },
    { key: "optionfour", name: "Option 4" },
  ];

  return (
    <>
      <DropDown
        options={dropDownOptions}
        id="sampledropdown"
        name="Sample Dropdown"
        multiselect={false}
      ></DropDown>
      <DropDown
        options={dropDownOptions}
        id="disabledDropwDown"
        disabled={true}
        name="Disabled Drop Down"
        multiselect={false}
      ></DropDown>
      <DropDown
        options={dropDownOptions}
        id="multiselectDropdown"
        name="Multi Select Dropdown"
        multiselect={true}
      ></DropDown>
    </>
  );
};
