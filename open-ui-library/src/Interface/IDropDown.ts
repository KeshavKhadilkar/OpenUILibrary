export interface IDropDownProps {
  options: IDropDownOption[];
  name:string;
  id:string;
  multiselect?:boolean;
  disabled?:boolean;
  onOptionSelect?: (e: any, selectedkey: string | string[]) => void;
}

export interface IDropDownOption {
  key: string;
  name: string;
}
