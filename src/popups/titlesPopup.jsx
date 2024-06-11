import React, { useState, useEffect, useRef } from 'react';
import { SubHeadingComponent } from '../reusableComponents/subHeadingComponent';
import { Titles } from '../data/titlesData';

export const TitlesPopup = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const popupRef = useRef(null);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const handleClose = () => {
        setIsPopupOpen(false);
    };

    return (
        <div>
            {isPopupOpen && (
                <div>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleClose}></div>
                    <div className="m-3 fixed inset-0 flex items-center justify-center z-50">
                        <div ref={popupRef} className="bg-performance-act-one border-2 border-yellow-bright p-8 rounded shadow-lg relative max-h-screen overflow-y-auto">
                            <button
                                onClick={handleClose}
                                className="absolute top-0 right-0 mt-2 mr-2 text-orange-bright hover:text-gray-700"
                            >
                                &times;
                            </button>
                            <SubHeadingComponent>Titles <br />”the dinner table set”</SubHeadingComponent>
                            <ul className="grid grid-cols-2 sm:grid-cols-2 gap-2 list-none pt-3 text-pink-bright font-lexend tracking-tighter text-md leading-tight">
                                {Titles.map((item, index) => (
                                    <li key={index} className="">{item.name}</li>
                                ))}
                            </ul>
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
