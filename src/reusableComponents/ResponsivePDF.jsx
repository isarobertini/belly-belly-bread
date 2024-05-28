import React from 'react';
import './ResponsiveIframe.css';
import Kokbok from "../assets/cookBook/Bakverk.pdf";

export const ResponsivePDF = () => {
    return (
        <div id="Iframe-Master-CC-and-Rs" className="set-margin set-padding set-border set-box-shadow center-block-horiz">
            <div className="responsive-wrapper responsive-wrapper-wxh-572x612" style={{ WebkitOverflowScrolling: 'touch', overflow: 'auto' }}>
                <iframe src={Kokbok} title="Embedded PDF" style={{ width: '100%', height: '100%', border: 'none' }}>
                    <p style={{ fontSize: '110%' }}>
                        <em><strong>ERROR: </strong> An iframe should be displayed here but your browser version does not support iframes. </em>
                        Please update your browser to its most recent version and try again.
                    </p>
                </iframe>
            </div>
        </div>
    );
};
