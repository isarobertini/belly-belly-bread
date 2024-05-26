import { useState } from 'react';

import './galleryStyle.css';

const images = [
    { src: "https://picsum.photos/id/1036/1920/1200", desc: "A tent in the snowy mountains", description: "drawing, 40x40" },
    { src: "https://picsum.photos/id/1015/1920/1200", desc: "A river between the mountains" },
    { src: "https://picsum.photos/id/1016/1920/1200", desc: "Rocky mountains" },
    { src: "https://picsum.photos/id/1026/1920/1200", desc: "Trains in a deposit" },
    { src: "https://picsum.photos/id/1018/1920/1200", desc: "Greeny mountains" },
    { src: "https://picsum.photos/id/1019/1920/1200", desc: "Storm in the sea" },
    { src: "https://picsum.photos/id/1021/1920/1200", desc: "Fog in a valley of trees" },
    { src: "https://picsum.photos/id/1024/1920/1200", desc: "Flying like a bird of prey" },
    { src: "https://picsum.photos/id/1006/1920/1200", desc: "A woman and a dog looking at a foggy valley" },
    { src: "https://picsum.photos/id/1038/1920/1200", desc: "Sea waves" },
    { src: "https://picsum.photos/id/1050/1920/1200", desc: "Rocky cliffs" },
    { src: "https://picsum.photos/id/1043/1920/1200", desc: "Mountains seen through a forest" }
];

export const Gallery = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(0);

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
                    {images.map((image, index) => (
                        <figure key={index} className="gallery__item" onClick={() => handleImageClick(index)}>
                            <img src={image.src} alt={image.desc} className="gallery__image" />

                            <figcaption className="gallery__image__caption">{image.desc}</figcaption>
                            <p className="">Description: {image.description}</p>
                        </figure>
                    ))}
                </section>

            </section>

            {modalOpen && (
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


