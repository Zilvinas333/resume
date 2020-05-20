import React from 'react';

function SocialLinks ({children, className, childrenDivClass}) {
    return (
        <div className={className}>
            <div class={childrenDivClass}></div> <a>{children}</a>
        </div>
    );
}

export default SocialLinks;