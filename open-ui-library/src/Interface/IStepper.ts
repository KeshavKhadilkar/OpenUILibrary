export interface IStepperProps {
  steps: ISteps[];
  data: JSX.Element;
  onStepClick: (index: number) => void;
}

export interface ISteps {
  name: string;
  index: number;
}
