import { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";

import { NavigationMenu } from "../common/NavigationMenu";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { RollingText } from "../common/RollingText";
import { ImageComponent } from '../reusableComponents/imageComponent';
import { ButtonComponent } from '../reusableComponents/buttonComponent';
import { Footer } from "../reusableComponents/footer";

import cookBookHeading from "../assets/cookBook/cookBookHeading.png"
import Kokbok from "../assets/cookBook/Bakverk.pdf";

export const TheCookbook = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to check if the screen width is less than or equal to 768px (common for mobile devices)
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check
        checkIfMobile();

        // Event listener to check on window resize
        window.addEventListener('resize', checkIfMobile);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    return (
        <>
            <div className="bg-performance-act-one h-full">
                <div className="bg-pink-bright">
                    {/* Rolling text */}
                    <RollingText text="Trigger warning: deals with mental illness" />
                    <NavigationMenu />
                </div>
                <div className="bg-performance-act-one overflow-hidden">
                    <RollingText scrollamount="3" text="mmmmm" />
                </div>
                <div>
                    <div className="flex flex-col items-center">
                        <div className="md:w-6/12 justify-center">

                            <Fade>
                                <div className="flex flex-col md:flex-row w-full justify-center items-center">
                                    <ImageComponent className="h-96" src={cookBookHeading} disableModal />
                                </div>
                            </Fade>

                            <SubHeadingComponent>The cookbook that Catharina Bauer (Hedda Bauer's grandmother) gave to Marika Bauer (Hedda Bauer's mom)</SubHeadingComponent>
                        </div>
                    </div>

                    <Fade>
                        <div className="bg-performance-act-one flex flex-col items-center pb-12">
                            {isMobile ? (
                                <ButtonComponent
                                    className=""
                                    onClick={() => window.open(Kokbok, '_blank')}
                                    label="Open PDF"
                                >

                                </ButtonComponent>
                            ) : (
                                <object className="bg-brown-dark my-6 h-screen w-11/12 lg:w-6/12" data={Kokbok} type="application/pdf" aria-label="The Cookbook PDF">
                                    <p>Your browser does not support PDFs. Download the PDF to view it: <a href={Kokbok}>Download PDF</a>.</p>
                                </object>
                            )}
                        </div>
                    </Fade>
                </div>
            </div>
            <Footer />
        </>
    );
};
