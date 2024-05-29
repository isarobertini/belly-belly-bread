import React, { useState, useEffect } from 'react';
import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { RollingText } from "../common/RollingText";
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
            <div className="bg-brown-dark h-screen">
                <div className="bg-pink-light">
                    {/* Rolling text */}
                    <RollingText text="Trigger warning: deals with mental illness" />
                    <NavigationMenu />
                </div>

                <div>
                    <div className="flex flex-col items-center">
                        <div className="md:w-6/12 justify-center">
                            <HeadingComponent>The Cookbook</HeadingComponent>
                            <SubHeadingComponent>The cookbook that Catharina Bauer (Hedda Bauer's grandmother) gave to Marika Bauer (Hedda Bauer's mom)</SubHeadingComponent>
                        </div>
                    </div>
                    <div className="bg-brown-dark flex flex-col items-center">
                        {isMobile ? (
                            <button
                                className="my-6 p-2 bg-yellow-bright text-pink-bright rounded"
                                onClick={() => window.open(Kokbok, '_blank')}
                            >
                                Open PDF
                            </button>
                        ) : (
                            <object className="bg-brown-dark my-6 h-screen w-11/12 lg:w-6/12" data={Kokbok} type="application/pdf" aria-label="The Cookbook PDF">
                                <p>Your browser does not support PDFs. Download the PDF to view it: <a href={Kokbok}>Download PDF</a>.</p>
                            </object>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
