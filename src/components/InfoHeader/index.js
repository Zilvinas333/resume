import React from 'react';
import SubLine from '../SubLine';

function InfoHeader ({children, className}) {
    return (
        <div className={className}>
            <h3>{children}</h3>
            <SubLine />
        </div>
    );
}

export default InfoHeader;