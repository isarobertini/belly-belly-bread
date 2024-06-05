import React, { useEffect } from 'react';

export const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            // Add overflow-hidden to body when modal is open
            document.body.classList.add('overflow-hidden');
        } else {
            // Remove overflow-hidden from body when modal is closed
            document.body.classList.remove('overflow-hidden');
        }

        // Cleanup: Remove event listener when component unmounts
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative bg-white rounded-lg max-w-full max-h-full flex items-center justify-center">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};
