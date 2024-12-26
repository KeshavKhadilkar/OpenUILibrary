export interface IButtonProps{
    name: string;
    disabled?: boolean;
    type: IButtonType;
    style?: React.CSSProperties;
    onClick?:(e:any)=>void;
}

export enum IButtonType{
    primary = 'primary',
    secondary = 'secondary',
    danger = 'danger',
    warning = 'warning',
    info = 'info',
    success = 'success',
    light = 'light',
    dark = 'dark',
    link = 'link',
    default = 'default'
}