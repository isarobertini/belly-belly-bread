import { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

import { NavigationMenu } from "../common/NavigationMenu";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { collaborations } from "../data/CollaborationData";
import { ThanksTo } from "../data/CollaborationData";
import { Kurzbaugergasse } from "../data/CollaborationData";
import { RollingText } from "../reusableComponents/RollingText";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { Footer } from "../reusableComponents/footer";

import collaborationHeading from "../assets/collabs/collaborationHeading.webp";

export const Collaborations = () => {
    const [openCollaborationIndex, setOpenCollaborationIndex] = useState(null);

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
                {collaborations.map((collaboration, index) => (
                    <title key={index}>Collaborations | Belly Belly Bread -{collaboration.name} </title>
                ))}
                {ThanksTo.map((person, index) => (
                    <title key={index}> Collaborations | Belly Belly Bread -{person.name}</title>
                ))}
                {Kurzbaugergasse.map((person, index) => (
                    <title key={index}> Collaborations | Belly Belly Bread -{person.name}</title>
                ))}
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
                        {collaborations.map((collaboration, index) => (
                            <div key={index} className="w-full md:w-auto mb-4">
                                <ParagraphComponent className="cursor-pointer">
                                    {collaboration.name}
                                </ParagraphComponent>
                                <button
                                    className="text-blue-500 underline"
                                    onClick={() => handleToggle(index)}
                                >
                                    {openCollaborationIndex === index ? (
                                        <>
                                            <img width="20" height="20" src="https://img.icons8.com/?size=100&id=39792&format=png&color=f1f80a" />
                                        </>
                                    ) : (
                                        <>
                                            <img width="20" height="20" src="https://img.icons8.com/?size=100&id=39788&format=png&color=f1f80a" />
                                        </>
                                    )}
                                </button>

                                {openCollaborationIndex === index && (
                                    <div className="mt-2">
                                        <ParagraphComponent className="text-yellow-bright">
                                            {collaboration.description}
                                        </ParagraphComponent>

                                        <div className="my-6 flex flex-col items-center">
                                            <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-6">
                                                {/* Render images */}
                                                <div className="group relative mb-4 lg:mb-0 mx-2 lg:mx-0">
                                                    <img className="bg-yellow-bright w-52 border-2 border-black" src={collaboration.image2} alt="Image 2" />
                                                    <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
                                                        <span className="font-lexend tracking-tighter text-yellow-bright text-s text-center p-4">
                                                            Documentation will be uploaded once the show is over. Please visit the real show in the meantime
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="group relative mb-4 lg:mb-0 mx-2 lg:mx-0">
                                                    <img className="bg-pink-bright w-52 border-2 border-black" src={collaboration.image2} alt="Image 2" />
                                                    <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
                                                        <span className="font-lexend tracking-tighter text-yellow-bright text-s text-center p-4">
                                                            Documentation will be uploaded once the show is over. Please visit the real show in the meantime
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="group relative mb-4 lg:mb-0 mx-2 lg:mx-0">
                                                    <img className="w-52 bg-orange-bright border-2 border-black" src={collaboration.image3} alt="Image 3" />
                                                    <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
                                                        <span className="font-lexend tracking-tighter text-yellow-bright text-s text-center p-4">
                                                            Documentation will be uploaded once the show is over. Please visit the real show in the meantime
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <SubHeadingComponent>SPECIAL THANKS TO</SubHeadingComponent>
                    <div className="text-center lg:text-left lg:flex flex-wrap md:space-x-4">
                        {ThanksTo.map((ThanksTo, index) => (
                            <div key={index} className="">
                                <ParagraphComponent>{ThanksTo.name}</ParagraphComponent>
                            </div>
                        ))}
                    </div>

                    <SubHeadingComponent>WORKSHOP TEACHERS & ASSISTANTS AT KBG</SubHeadingComponent>
                    <div className="text-center lg:text-left lg:flex flex-wrap md:space-x-4 mb-12">
                        {Kurzbaugergasse.map((Kurzbaugergasse, index) => (
                            <div key={index} className="w-full md:w-auto">
                                <ParagraphComponent>{Kurzbaugergasse.name}</ParagraphComponent>
                            </div>
                        ))}
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
