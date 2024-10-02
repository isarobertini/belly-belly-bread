import { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

import { NavigationMenu } from "../common/NavigationMenu";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { RollingText } from "../reusableComponents/RollingText";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { Footer } from "../reusableComponents/footer";
import { CollaborationsFetcher } from '../collaborationComponent/CollaborationsFetcher';

import collaborationHeading from "../assets/collabs/collaborationHeading.webp";

export const Collaborations = () => {
    const [collaborationsData, setCollaborationsData] = useState([]); // Initialize as an empty array
    const [openCollaborationIndex, setOpenCollaborationIndex] = useState(null);

    // Callback function to handle fetched data
    const handleFetchComplete = (data) => {
        setCollaborationsData(data); // Update state with fetched data
    };

    const handleToggle = (index) => {
        if (openCollaborationIndex === index) {
            setOpenCollaborationIndex(null); // Close the section if it's already open
        } else {
            setOpenCollaborationIndex(index); // Open the clicked section
        }
    };

    return (
        <>
            <Helmet>
                <title>Collaborations | Belly Belly Bread</title>
            </Helmet>

            <div className="bg-pink-bright">
                <RollingText text="Trigger warning: deals with mental illness" />
                <NavigationMenu />
            </div>

            <div className="bg-performance-act-one overflow-hidden">
                <RollingText scrollamount="3" text="it takes a village" />
            </div>

            <div className="overflow-hidden h-auto flex flex-col items-center bg-performance-act-one">
                <div className="md:w-6/12 w-full flex flex-col items-center justify-center">
                    <Fade>
                        <div className="flex flex-col md:flex-row w-full justify-center items-center">
                            <ImageComponent className="md:h-96" src={collaborationHeading} disableModal />
                        </div>
                    </Fade>

                    <SubHeadingComponent>COLLABORATORIAL WORKS IN THE INSTALLATION</SubHeadingComponent>

                    <div className="text-center w-full">
                        <CollaborationsFetcher onFetchComplete={handleFetchComplete} />

                        {collaborationsData.length > 0 ? (
                            collaborationsData.map((collaboration, index) => (
                                <div key={collaboration.id} className="w-full md:w-auto mb-4">
                                    <ParagraphComponent className="cursor-pointer">
                                        {collaboration.name}
                                    </ParagraphComponent>
                                    <button
                                        className="text-blue-500 underline"
                                        onClick={() => handleToggle(index)}
                                    >
                                        {openCollaborationIndex === index ? (
                                            <img width="20" height="20" src="https://img.icons8.com/?size=100&id=39792&format=png&color=f1f80a" />
                                        ) : (
                                            <img width="20" height="20" src="https://img.icons8.com/?size=100&id=39788&format=png&color=f1f80a" />
                                        )}
                                    </button>

                                    {openCollaborationIndex === index && (
                                        <div className="mt-2">
                                            <div className="my-6 flex flex-col items-center">
                                                {collaboration.file && (
                                                    <ImageComponent
                                                        src={collaboration.file.url} // Assuming the file object has a URL
                                                        alt={collaboration.name || 'Collaboration Image'}
                                                    />
                                                )}
                                                <ParagraphComponent className="text-yellow-bright">
                                                    {collaboration.description}
                                                </ParagraphComponent>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div>No collaborations found.</div>
                        )}
                    </div>
                </div>
            </div>

            <div className="bg-performance-act-one">
                <RollingText text="Trigger warning: deals with mental illness" />
            </div>
            <Footer />
        </>
    );
};
