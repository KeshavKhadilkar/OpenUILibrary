export interface IRadioGroupProps {
  options: IRadioGroupOptions[];
  onselectionchange?: (e: any, key: string) => void;
  defaultselected?: string;
}

export interface IRadioGroupOptions {
  key: string;
  name: string;
  id?: string;
}
