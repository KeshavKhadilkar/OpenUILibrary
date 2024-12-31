import React from 'react';
import { ILinkProps } from '../../Interface';
import './index.css';

const Link: React.FC<ILinkProps> = (props) => {
    const { href, target = '_self', rel, className, id, onClick, children, style } = props;

    return (
        <a
            href={href}
            target={target}
            rel={rel}
            className={className || 'link'}
            id={id}
            onClick={onClick}
            style={style || { textDecoration: 'none', color: 'blue' }}
        >
            {children}
        </a>
    );
};

export default Link;
