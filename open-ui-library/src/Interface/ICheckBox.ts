export interface ICheckBoxProps{
    name: string;
    disabled?: boolean;
    checked?: boolean;
    renderpositionend?:boolean;
    onChange?:(e:any)=>void;
}