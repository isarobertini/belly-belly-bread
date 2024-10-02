import { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

import { client } from "../../contentfulClient";  // Import Contentful client
import { NavigationMenu } from "../common/NavigationMenu";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { RollingText } from "../reusableComponents/RollingText";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { Footer } from "../reusableComponents/footer";

import collaborationHeading from "../assets/collabs/collaborationHeading.webp";

export const Collaborations = () => {
    const [collaborationsData, setCollaborationsData] = useState([]); // Initialize as an empty array
    const [openCollaborationIndex, setOpenCollaborationIndex] = useState(null);
    const [loading, setLoading] = useState(true);  // Loading state to manage API fetch

    // Fetch collaboration data from Contentful
    useEffect(() => {
        const fetchCollaborations = async () => {
            try {
                const response = await client.getEntry('2uB5W8WlBzAOoMmozjOcgT'); // Entry ID

                const collaborationFields = response.fields; // Access the fields directly
                const collaborationsArray = Object.keys(collaborationFields).map(key => {
                    const collaboration = collaborationFields[key][0]?.fields; // Get the first element's fields
                    return {
                        id: key,
                        name: collaboration?.title || 'No title available',
                        description: collaboration?.description || 'No description available',
                        file: collaboration?.file || null // Assuming there's a file object for the image
                    };
                }).filter(item => item.file); // Filter out collaborations without files

                setCollaborationsData(collaborationsArray); // Set the combined array in state
            } catch (error) {
                console.error("Error fetching collaboration data from Contentful:", error);
            } finally {
                setLoading(false); // Set loading to false after fetch
            }
        };

        fetchCollaborations();
    }, []);

    const handleToggle = (index) => {
        if (openCollaborationIndex === index) {
            setOpenCollaborationIndex(null); // Close the section if it's already open
        } else {
            setOpenCollaborationIndex(index); // Open the clicked section
        }
    };

    // Loading state - Show a loader or message while fetching data
    if (loading) {
        return <div>Loading collaborations...</div>;
    }

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
