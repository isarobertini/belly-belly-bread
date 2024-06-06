import { useEffect } from 'react';
import ReactDOM from 'react-dom';

export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const handleClose = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={handleClose}>
            <div className="relative">
                <button
                    className="absolute top-0 right-0 m-2 text-orange-bright text-2xl"
                    onClick={onClose}
                >
                    &times;
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
};
