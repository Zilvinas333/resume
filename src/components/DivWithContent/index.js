import React from 'react';

function DivWithContent ({children, className}) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default DivWithContent;