import React, { HTMLAttributes } from 'react';

interface IFlexProps extends HTMLAttributes<HTMLDivElement> {

}

const Flex: React.FC<IFlexProps> = ({ children, style, ...props }) => {
    return (
        <div style={{
            display: 'flex',
            ...style,
        }}
             {...props}
        >
            {children}
        </div>
    );
};

export default Flex;
