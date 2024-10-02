import { useState, useEffect } from 'react';
import './galleryStyle.css';
import { client } from "../../contentfulClient";  // Import Contentful client

export const Gallery = () => {
    const [images, setImages] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(0);

    useEffect(() => {
        // Fetch images from Contentful
        const fetchImages = async () => {
            try {
                const response = await client.getEntries({
                    content_type: 'installation', // Your content type ID
                    'sys.id': '7JL4ugnYVuTASQxZTWoxP5', // Your entry ID
                });

                // Ensure the 'photoDocumentation' field exists
                const fetchedImages = response.items[0]?.fields.photoDocumentation?.map((image) => ({
                    src: image.fields.file.url,
                    title: image.fields.title || '',
                    desc: image.fields.description || '',
                }));

                if (fetchedImages) {
                    setImages(fetchedImages);
                } else {
                    console.error('No photoDocumentation field found');
                }
            } catch (error) {
                console.error('Error fetching images from Contentful:', error);
            }
        };

        fetchImages();
    }, []);

    const handlePrev = () => {
        setCurrentItem((currentItem - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentItem((currentItem + 1) % images.length);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleImageClick = (index) => {
        setCurrentItem(index);
        setModalOpen(true);
    };

    return (
        <div className="page">
            <section className="container">
                <section className="gallery">
                    {images.length > 0 ? (
                        images.map((image, index) => (
                            <figure key={index} className="gallery__item" onClick={() => handleImageClick(index)}>
                                <img src={image.src} alt={image.desc} className="gallery__image" />
                                <figcaption className="gallery__caption">
                                    <h3 className='font-lexend tracking-tighter text-orange-bright text-left'>{image.title}</h3>  {/* Display title */}
                                    <p className='font-lexend tracking-tighter text-pink-bright text-left'> {image.desc}</p>     {/* Display description */}
                                </figcaption>
                            </figure>
                        ))
                    ) : (
                        <p>Loading images...</p>
                    )}
                </section>
            </section>

            {modalOpen && images.length > 0 && (
                <section className="gallery__modal" tabIndex="0">
                    <img src={images[currentItem].src} alt={images[currentItem].desc} className="gallery__modal__image" />

                    <button className="gallery__navigation--prev" onClick={handlePrev}></button>
                    <button className="gallery__navigation--next" onClick={handleNext}></button>
                    <button className="gallery__navigation--close" onClick={closeModal}></button>
                </section>
            )}
        </div>
    );
};
