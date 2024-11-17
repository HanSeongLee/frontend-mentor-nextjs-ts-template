import React, { HTMLAttributes } from 'react';

interface ICustomComponentProps extends HTMLAttributes<HTMLDivElement> {

}

const CustomComponent: React.FC<ICustomComponentProps> = (props) => {
    return (
        <div {...props}>
            CustomComponent
        </div>
    );
};

export default CustomComponent;
