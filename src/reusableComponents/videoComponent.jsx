import React, { useState } from 'react';
import { ButtonComponent } from './buttonComponent';
import { ParagraphComponent } from './paragraphComponent';

export const VideoComponent = ({ src, controls = true, autoPlay = false, className, poster, ...props }) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Combine the default Tailwind class with any additional classes provided
    const defaultClasses = "p-6";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    const handleOverlayClick = () => {
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div className="relative">
            <video
                src={src}
                controls={false} // Disable default controls
                autoPlay={false} // Disable autoplay
                className={classes}
                poster={poster}
                {...props}
            />
            <div
                className="absolute inset-0 flex items-center justify-center bg-transparent cursor-pointer"
                onClick={handleOverlayClick}
            >
                {/* Overlay Content */}
                <div className="bg-pink-bright text-yellow-bright bg-opacity-70 hover:bg-orange-bright p-2 transition duration-200 ease-in-out">
                    Click to play
                </div>
            </div>
            {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="bg-performance-act-one p-4 shadow-lg text-center">
                        <ParagraphComponent>The video is currently developing in Belgium.</ParagraphComponent>
                        <ButtonComponent
                            to="#"
                            label="Close"
                            onClick={handleClosePopup}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
