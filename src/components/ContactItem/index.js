import React from 'react';

function ContactItem ({children, className, childrenDivClass, head, info}) {
    return (
        <div className={className}>
            <div className={childrenDivClass}>
            {head}
            </div>
            {info}
        </div>

    );
}

export default ContactItem;