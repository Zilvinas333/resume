import React from 'react';

function Badges ({children, className}) {
    return (
        <React.Fragment>
        <div className={className}>
            {children}
        </div><br/>
        </React.Fragment>
    );
}

export default Badges;