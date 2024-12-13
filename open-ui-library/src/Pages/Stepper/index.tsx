import { useEffect, useState } from "react";
import { CheckBox } from "../../Components/CheckBox";
import { Stepper } from "../../Components/Stepper";
import { ISteps } from "../../Interface";

export const StepperUsage: React.FC = () => {
  const steps: ISteps[] = [
    { name: "1", index: 1 },
    { name: "2", index: 2 },
    { name: "3", index: 3 },
    { name: "4", index: 4 },
    { name: "5", index: 5 },
    { name: "6", index: 6 },
  ];
  const [data, setdata] = useState<JSX.Element>(<></>);
  const [index, setindex] = useState<number>(1);

  const onStepClick = (index: number) => {
    setindex(index);
  };

  useEffect(() => {
    setdata(getData(index));
  }, [index]);

  const getData = (index: number) => {
    switch (index) {
      case 1:
        return <CheckBox name="Sample CheckBox" checked={false} />;
      case 2:
        return <CheckBox name="Sample Checked CheckBox" checked={true} />;
      case 3:
        return <CheckBox name="Disabled CheckBox" disabled={true} />;
      case 4:
        return (
          <CheckBox
            name="Disabled Checked CheckBox"
            disabled={true}
            checked={true}
          />
        );
      case 5:
        return (
          <CheckBox
            name="CheckBox position at end"
            disabled={true}
            checked={true}
            renderpositionend={true}
          />
        );
      default:
        return <div>Ran out of Data</div>;
    }
  };
  return (
    <>
      <Stepper steps={steps} data={data} onStepClick={onStepClick} />
    </>
  );
};
