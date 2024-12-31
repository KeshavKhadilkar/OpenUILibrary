import React from 'react';
import { ILabelProps } from '../../Interface';

const Label: React.FC<ILabelProps> = (props) => {
    const { htmlFor, className, id, onClick, children, style } = props;
    return (
        <label
            htmlFor={htmlFor}
            className={className || 'label'}
            id={id}
            onClick={onClick}
            style={style}
        >
            {children}
        </label>
    );
};

export default Label;