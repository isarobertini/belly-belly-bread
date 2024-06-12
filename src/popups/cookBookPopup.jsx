import React, { useState, useEffect, useRef } from 'react';
import { SubHeadingComponent } from '../reusableComponents/subHeadingComponent';
import { ParagraphComponent } from '../reusableComponents/paragraphComponent';

export const CookBookPopup = () => {
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
                        <div
                            ref={popupRef}
                            className="bg-performance-act-one border-2 border-yellow-bright p-8 shadow-lg relative max-h-screen overflow-y-auto lg:max-w-lg xl:max-w-xl"
                            style={{ paddingRight: '1.5rem' }}
                        >
                            <button
                                onClick={handleClose}
                                className="absolute top-0 right-0 mt-2 mr-2 text-orange-bright hover:text-gray-700"
                            >
                                &times;
                            </button>
                            <SubHeadingComponent>About Prinsessornas kokbok</SubHeadingComponent>
                            <ParagraphComponent>
                                Prinsessornas kokbok is a classic work of Swedish cookery literature, written by Jenny Åkerström-Söderström. The first edition was published in 1929. Jenny Åkerström ran a home economics school for young girls in Stockholm in the last half of the 20th century. Among the pupils were Princesses Margaretha, Märtha and Astrid, daughters of Prince Carl and Princess Ingeborg. Åkerström dedicated the cookery book to the princesses and the book was published in many editions during the 1930s, 40s and 50s. The book included a cake called "Green Cake", which the princesses are said to have been particularly fond of and which later became known as princess cake.
                            </ParagraphComponent>
                        </div>
                    </div>
                </div>
            )}

            {!isPopupOpen && (
                <button
                    onClick={togglePopup}
                    className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow z-50 text-center bg-pink-bright text-yellow-bright font-lexend tracking-tighter text-md leading-tight uppercase shadow-md hover:bg-orange-bright hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                >
                    About The Cookbook
                </button>
            )}
        </div>
    );
};
