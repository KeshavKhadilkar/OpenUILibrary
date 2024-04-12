import { CheckBox } from "../../Components/CheckBox";

export const CheckBoxUsage: React.FC = () => {
  return (
    <>
      <CheckBox name="Sample CheckBox" checked={false} />
      <CheckBox name="Sample Checked CheckBox" checked={true} />
      <CheckBox name="Disabled CheckBox" disabled={true} />
      <CheckBox
        name="Disabled Checked CheckBox"
        disabled={true}
        checked={true}
      />
      <CheckBox
        name="CheckBox position at end"
        disabled={true}
        checked={true}
        renderpositionend={true}
      />
    </>
  );
};

export default CheckBoxUsage;
