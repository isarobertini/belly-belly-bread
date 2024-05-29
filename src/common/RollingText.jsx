// RollingText.js
import React from 'react';

export const RollingText = ({ text, behavior = "scroll", scrollamount = "5", direction = "left" }) => {
    return (
        <marquee
            behavior={behavior}
            scrollamount={scrollamount}
            direction={direction}
            className="border-yellow-bright border-2 font-bold bg-orange-bright text-2xl font-oxygen-mono text-yellow-bright"
        >
            {text}
        </marquee>
    );
};


