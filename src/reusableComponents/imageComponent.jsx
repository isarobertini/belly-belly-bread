import { useState } from 'react';
import { Modal } from './modal';

export const ImageComponent = ({ src, alt, className, disableModal = false, ...props }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const defaultClasses = "p-6";
    const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

    const handleImageClick = () => {
        if (!disableModal) {
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>

            <img
                src={src}
                alt={alt}
                className={`${classes} cursor-pointer`}
                onClick={handleImageClick}
                {...props}
            />
            {!disableModal && (
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <div className="flex items-center justify-center">
                        <img src={src} alt={alt} className="max-w-full max-h-screen" />
                    </div>
                </Modal>
            )}

        </>
    );
};
