import { useState } from 'react';
import './galleryStyle.css';

// Import local images
import imgGallery1 from '../assets/imgGallery/imgGallery1.jpg';
import imgGallery2 from '../assets/imgGallery/imgGallery2.jpg';
import imgGallery3 from '../assets/imgGallery/imgGallery3.jpg';
import imgGallery4 from '../assets/imgGallery/imgGallery4.jpg';
import imgGallery5 from '../assets/imgGallery/imgGallery5.jpg';
import imgGallery6 from '../assets/imgGallery/imgGallery6.jpg';
import imgGallery7 from '../assets/imgGallery/imgGallery7.jpg';
import imgGallery8 from '../assets/imgGallery/imgGallery8.jpg';
import imgGallery9 from '../assets/imgGallery/imgGallery9.jpg';
import imgGallery10 from '../assets/imgGallery/imgGallery10.jpg';
import imgGallery11 from '../assets/imgGallery/imgGallery11.jpg';
import imgGallery12 from '../assets/imgGallery/imgGallery12.jpg';
import imgGallery13 from '../assets/imgGallery/imgGallery13.jpg';
import imgGallery14 from '../assets/imgGallery/imgGallery14.jpg';
import imgGallery15 from '../assets/imgGallery/imgGallery15.jpg';
import imgGallery16 from '../assets/imgGallery/imgGallery16.jpg';
import imgGallery17 from '../assets/imgGallery/imgGallery17.jpg';
import imgGallery18 from '../assets/imgGallery/imgGallery18.jpg';
import imgGallery19 from '../assets/imgGallery/imgGallery19.jpg';
import imgGallery20 from '../assets/imgGallery/imgGallery20.jpg';
import imgGallery21 from '../assets/imgGallery/imgGallery21.jpg';
import imgGallery22 from '../assets/imgGallery/imgGallery22.jpg';
import imgGallery23 from '../assets/imgGallery/imgGallery23.jpg';
import imgGallery24 from '../assets/imgGallery/imgGallery24.jpg';
import imgGallery25 from '../assets/imgGallery/imgGallery25.jpg';
import imgGallery26 from '../assets/imgGallery/imgGallery26.jpg';
import imgGallery27 from '../assets/imgGallery/imgGallery27.jpg';
import imgGallery28 from '../assets/imgGallery/imgGallery28.jpg';
import imgGallery29 from '../assets/imgGallery/imgGallery29.jpg';


const images = [
    { src: imgGallery1, desc: "A tent in the snowy mountains", description: "drawing, 40x40" },
    { src: imgGallery2, desc: "A river between the mountains", description: "drawing, 40x40" },
    { src: imgGallery3, desc: "Rocky mountains", description: "drawing, 40x40" },
    { src: imgGallery4, desc: "Trains in a deposit", description: "drawing, 40x40" },
    { src: imgGallery5, desc: "Greeny mountains", description: "drawing, 40x40" },
    { src: imgGallery6, desc: "Storm in the sea", description: "drawing, 40x40" },
    { src: imgGallery7, desc: "Fog in a valley of trees", description: "drawing, 40x40" },
    { src: imgGallery8, desc: "Flying like a bird of prey", description: "drawing, 40x40" },
    { src: imgGallery9, desc: "A woman and a dog looking at a foggy valley", description: "drawing, 40x40" },
    { src: imgGallery10, desc: "Sea waves", description: "drawing, 40x40" },
    { src: imgGallery11, desc: "Rocky cliffs", description: "drawing, 40x40" },
    { src: imgGallery12, desc: "Mountains seen through a forest", description: "drawing, 40x40" },
    { src: imgGallery13, desc: "Description for image 13", description: "drawing, 40x40" },
    { src: imgGallery14, desc: "Description for image 14", description: "drawing, 40x40" },
    { src: imgGallery15, desc: "Description for image 15", description: "drawing, 40x40" },
    { src: imgGallery16, desc: "Description for image 16", description: "drawing, 40x40" },
    { src: imgGallery17, desc: "Description for image 17", description: "drawing, 40x40" },
    { src: imgGallery18, desc: "Description for image 18", description: "drawing, 40x40" },
    { src: imgGallery19, desc: "Description for image 19", description: "drawing, 40x40" },
    { src: imgGallery20, desc: "Description for image 20", description: "drawing, 40x40" },
    { src: imgGallery21, desc: "Description for image 21", description: "drawing, 40x40" },
    { src: imgGallery22, desc: "Description for image 22", description: "drawing, 40x40" },
    { src: imgGallery23, desc: "Description for image 23", description: "drawing, 40x40" },
    { src: imgGallery24, desc: "Description for image 24", description: "drawing, 40x40" },
    { src: imgGallery25, desc: "Description for image 25", description: "drawing, 40x40" },
    { src: imgGallery26, desc: "Description for image 26", description: "drawing, 40x40" },
    { src: imgGallery27, desc: "Description for image 27", description: "drawing, 40x40" },
    { src: imgGallery28, desc: "Description for image 28", description: "drawing, 40x40" },
    { src: imgGallery29, desc: "Description for image 29", description: "drawing, 40x40" },

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
