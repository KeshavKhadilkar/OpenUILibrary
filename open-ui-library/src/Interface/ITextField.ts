export interface ITextFieldProps{
    type: TextFieldTypes;
    //replace e type with actual type retured by input field
    onChange: (e: any)=> void;
    id: string;
    name: string;
    style?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
}

export enum TextFieldTypes{
    number =  "number",
    text =  "text",
    password =  "password"
}