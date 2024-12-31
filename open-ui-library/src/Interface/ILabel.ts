export interface ILabelProps {
    htmlFor?: string;
    className?: string;
    id?: string;
    onClick?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
    children: React.ReactNode;
    style?: React.CSSProperties;
  }
  