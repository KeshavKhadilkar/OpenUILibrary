export interface ILinkProps {
    href: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    rel?: string;
    className?: string;
    id?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

