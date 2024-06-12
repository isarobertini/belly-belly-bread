
import React, { useState, useRef } from 'react';
import { SubHeadingComponent } from '../reusableComponents/subHeadingComponent';
import { TitlesAtHome, TitlesAtTheGallery } from '../data/titlesData';

export const TitlesPopup = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const popupRef = useRef(null);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const handleClose = () => {
        setIsPopupOpen(false);
    };

    const renderArtists = (item) => {
        if (item.artist) {
            return <span className="text-sm text-gray-500">, Artist: {item.artist}</span>;
        } else if (item.artists) {
            return <span className="text-sm text-gray-500">, Artists: {item.artists.join(' and ')}</span>;
        }
        return null;
    };

    const renderItems = (items) => {
        return (
            <ul className="pl-4">
                {items.map((subItem, subIndex) => (
                    <li key={subIndex} className="text-sm text-gray-700">{subItem}</li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            {isPopupOpen && (
                <div>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleClose}></div>
                    <div className="m-3 fixed inset-0 flex items-center justify-center z-50">
                        <div ref={popupRef} className="bg-performance-act-one border-2 border-yellow-bright p-8 shadow-lg relative max-h-screen overflow-y-auto">
                            <button
                                onClick={handleClose}
                                className="absolute top-0 right-0 mt-2 mr-2 text-orange-bright hover:text-gray-700"
                            >
                                &times;
                            </button>

                            <div className="pt-3">
                                <div className="flex justify-between md:mx-20">
                                    <h2 className="font-sans font-medium text-2xl font-lexend tracking-tighter text-center text-orange-bright">Titles at Home</h2>
                                    <h2 className="font-sans font-medium text-2xl font-lexend tracking-tighter text-center text-orange-bright">Titles at the Gallery</h2>
                                </div>

                                <ul className="grid grid-cols-2 sm:grid-cols-2 gap-2 list-none pt-1 text-pink-bright font-lexend tracking-tighter text-md leading-tight">
                                    {TitlesAtHome.map((item, index) => (
                                        <li key={index}>
                                            {item.name}
                                            {renderArtists(item)}
                                            {item.items && renderItems(item.items)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="pt-3">
                                <h2 className="text-pink-bright font-lexend tracking-tighter text-md leading-tight">Titles at the Gallery</h2>
                                <ul className="grid grid-cols-2 sm:grid-cols-2 gap-2 list-none pt-1 text-pink-bright font-lexend tracking-tighter text-md leading-tight">
                                    {TitlesAtTheGallery.map((item, index) => (
                                        <li key={index}>
                                            {item.name}
                                            {renderArtists(item)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {!isPopupOpen && (
                <button
                    onClick={togglePopup}
                    className="fixed bottom-16 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow z-50 text-center bg-pink-bright text-yellow-bright font-lexend tracking-tighter text-md leading-tight uppercase shadow-md hover:bg-orange-bright hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                >
                    Titles
                </button>
            )}
        </div>
    );
};