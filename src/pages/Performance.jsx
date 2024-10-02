import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

import { NavigationMenu } from "../common/NavigationMenu";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { RollingText } from "../reusableComponents/RollingText";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { Footer } from "../reusableComponents/footer";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { Acts } from "../common/Acts";
import { client } from "../../contentfulClient";  // Import Contentful client

import PerformanceHeading from "../assets/performance/performanceHeading.webp";

export const Performance = () => {
    const [performanceTitle, setPerformanceTitle] = useState('');  // State to hold the fetched performance title
    const [crewTitle, setCrewTitle] = useState('');  // State to hold the fetched CrewTitle
    const [crewNames, setCrewNames] = useState([]);  // State to hold the fetched crew names (array)

    useEffect(() => {
        const fetchEntry = async () => {
            try {
                // Fetch the entry from Contentful
                const entry = await client.getEntry('1YWx52ugnMuA9XV3s6KVmi');
                console.log('Fetched entry:', entry); // Log the entire entry to check its structure

                // Set performanceTitle and crewTitle
                setPerformanceTitle(entry.fields.performanceTitle || '');
                setCrewTitle(entry.fields.crewTitle || '');

                // Since crewNames is a List type, it should already be an array in the API response
                if (Array.isArray(entry.fields.crewNames)) {
                    setCrewNames(entry.fields.crewNames);  // Set the array to state
                } else {
                    console.error('crewNames is not an array or is undefined');
                }
            } catch (err) {
                console.error('Error fetching entry:', err);
            }
        };

        fetchEntry();
    }, []);

    return (
        <>
            <Helmet>
                <title>Performance - Belly Belly Bread</title>
                <meta name="description" content="Join us for the performance of Belly Belly Bread featuring operette in 3 acts on June 16th, 23rd, and 30th at Kurzbaugergasse 9, 1020 Wien. Trigger warning: deals with mental illness. Crew: Hedda Bauer, Freja Gøetke, Isa Robertini, Charlotta Öberg, Kiki Loukhine" />
            </Helmet>

            <div className="bg-pink-bright">
                <RollingText text="Trigger warning: deals with mental illness" />
                <NavigationMenu />
            </div>

            <div className="bg-performance-act-one">
                <RollingText scrollamount="3" text="brrrrrrr brrrrrrrr brrrrrrrrrrrrrrrrr" />
            </div>

            <div className="flex flex-col items-center bg-performance-act-one">
                <div className="md:w-6/12 justify-center">

                    {/* Heading */}
                    <Fade>
                        <ImageComponent className="" src={PerformanceHeading} disableModal />
                    </Fade>

                    {/* SubHeading */}
                    <div className="my-6">
                        <SubHeadingComponent>{performanceTitle}</SubHeadingComponent>
                    </div>

                    <Acts />

                    {/* Crew Title */}
                    <SubHeadingComponent>{crewTitle}</SubHeadingComponent>

                    {/* Crew Names */}
                    <div className="text-center">
                        {crewNames.length > 0 ? (
                            // Map over the crewNames array to display each name in a separate row
                            crewNames.map((name, index) => (
                                <ParagraphComponent key={index} className="my-2">
                                    {name}
                                </ParagraphComponent>
                            ))
                        ) : (
                            <p>No crew names available.</p>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};
