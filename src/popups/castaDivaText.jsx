import React, { useState, useEffect, useRef } from 'react';
import { SubHeadingComponent } from '../reusableComponents/subHeadingComponent';
import { ParagraphComponent } from '../reusableComponents/paragraphComponent';

export const CastaDivaText = () => {
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
                            <SubHeadingComponent>Norma: Casta Diva- Lyrics</SubHeadingComponent>
                            <SubHeadingComponent> Aria by Vincenzo Bellini</SubHeadingComponent>

                            <ParagraphComponent>
                                Casta Diva, che inargenti <br />
                                queste sacre antiche piante,<br />
                                a noi volgi il bel sembiante<br />
                                senza nube e senza vel...<br />
                                Tempra, o Diva,<br />
                                tempra tu de cori ardenti<br />
                                tempra ancora lo zelo audace,<br />
                                spargi in terra quella pace<br />
                                che regnar tu fai nel ciel...<br />
                                Fine al rito : e il sacro bosco<br />
                                Sia disgombro dai profani.<br />
                                Quando il Nume irato e fosco<br />
                                Chiegga il sangue dei Romani,<br />
                                Dal Druidico delubro<br />
                                La mia voce tuoner .<br />
                                Cadr ; punirlo io posso.<br />
                                (Ma, punirlo, il cor non sa.<br />
                                Ah! bello a me ritorna<br />
                                Del fido amor primiero;<br />
                                E contro il mondo intiero...<br />
                                Difesa a te sar.<br />
                                Ah! bello a me ritorna<br />
                                Del raggio tuo sereno;<br />
                                E vita nel tuo seno,<br />
                                E patria e cielo avr .<br />
                                Ah, riedi ancora qual eri allora,<br />
                                Quando il cor ti diedi allora,<br />
                                Ah, riedi a me.)<br />
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
                    Norma: Casta Diva- Lyrics
                </button>
            )}
        </div>
    );
};
