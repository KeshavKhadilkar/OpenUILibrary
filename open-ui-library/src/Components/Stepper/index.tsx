import { IStepperProps } from "../../Interface";
import "./index.css";
export const Stepper: React.FC<IStepperProps> = (props) => {
  return (
    <>
      <div className="stepper-body">
        <div className="steps-panel">
          {props.steps &&
            props.steps.map((item, index) => {
              return (
                <div key={item.name} className="steps-panel-body">
                  <div
                    className="steps-button"
                    onClick={() => props.onStepClick(item.index)}
                  >
                    {item.name}
                  </div>
                  {index + 1 !== props.steps.length && (
                    <div className="steps-seperator"></div>
                  )}
                </div>
              );
            })}
        </div>
        <div className="steps-content">{props.data}</div>
      </div>
    </>
  );
};
