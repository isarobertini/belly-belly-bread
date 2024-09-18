import React, { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { client } from "../../contentfulClient";  // Import Contentful client

import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { RollingText } from "../reusableComponents/RollingText";
import { Footer } from "../reusableComponents/footer";

//import BellyPoster from "../assets/home/utan_qr.jpg"
import belly1 from "../assets/home/belly1.webp"
import belly2 from "../assets/home/belly2.webp"
import bread from "../assets/home/bread.webp"
import "../../src/font.css"

export const Home = () => {
    const [title, setTitle] = useState('');  // State to hold the fetched title
    const [posterUrl, setPosterUrl] = useState('');  // State to hold the fetched poster URL

    useEffect(() => {
        // Fetch the entry from Contentful
        client.getEntry('3vQzM4VDkl0jCtkyifVvm1')
            .then((entry) => {
                setTitle(entry.fields.title);  // Set the title from Contentful
                // Check if the poster field exists and set the URL
                if (entry.fields.poster && entry.fields.poster.fields.file) {
                    setPosterUrl(entry.fields.poster.fields.file.url);
                }
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <Helmet>
                <title>{title} | Belly Belly Bread</title>
                <meta name="description" content="Welcome to Hedda Bauer's diploma project at Belly Belly Bread. Explore the artistic journey through this immersive experience. Trigger warning: deals with mental illness." />
            </Helmet>

            <div className="bg-pink-bright">
                <RollingText text="Trigger warning: deals with mental illness" />
                <NavigationMenu />
            </div>
            <div className="bg-performance-act-one overflow-hidden">
                <RollingText scrollamount="3" text="crunchy crunchy maybe add some butter" />

                {/* Heading */}
                <div className="flex flex-col items-center">
                    <Fade>
                        <div className="flex flex-col md:flex-row w-full justify-center items-center ">
                            <ImageComponent className="w-full md:w-1/3" src={belly1} disableModal />
                            <ImageComponent className="w-full md:w-1/3" src={belly2} disableModal />
                            <ImageComponent className="w-full md:w-1/3" src={bread} disableModal />
                        </div>
                    </Fade>
                    <HeadingComponent>{title}</HeadingComponent> {/* Render Contentful title */}
                </div>
                {/* Poster */}
                <Fade>
                    <div className="flex flex-col items-center mb-12">
                        <div className="md:w-6/12 justify-center">
                            <ImageComponent className="bg-performance-act-one w-full border-none p-0 m-0" src={posterUrl} /> {/* Use the fetched poster URL */}
                        </div>
                    </div>
                </Fade>
                <RollingText text="Trigger warning: deals with mental illness" />
            </div>
            <Footer />
        </>
    );
};