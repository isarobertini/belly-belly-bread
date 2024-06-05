import { Fade } from "react-awesome-reveal";

import { NavigationMenu } from "../common/NavigationMenu";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { collaborations } from "../data/CollaborationData";
import { ThanksTo } from "../data/CollaborationData";
import { Kurzbaugergasse } from "../data/CollaborationData";
import { RollingText } from "../common/RollingText";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { Footer } from "../reusableComponents/footer";

import collaborationHeading from "../assets/collabs/collaborationHeading.png"

export const Collaborations = () => {
    return (
        <>
            <div className="bg-pink-bright">
                {/* Rolling text */}
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

                    {/*collabs */}
                    <SubHeadingComponent>CREW</SubHeadingComponent>
                    <div className="text-center">
                        {collaborations.map((collaboration, index) => (
                            <div key={index} className="w-full md:w-auto">
                                <ParagraphComponent>{collaboration.name}</ParagraphComponent>
                            </div>
                        ))}

                    </div>
                    {/*Thanks to */}
                    <SubHeadingComponent>SPECIAL THANKS TO</SubHeadingComponent>
                    <div className="text-center lg:text-left lg:flex flex-wrap md:space-x-4">
                        {ThanksTo.map((ThanksTo, index) => (
                            <div key={index} className="">
                                <ParagraphComponent>{ThanksTo.name}</ParagraphComponent>
                            </div>
                        ))}

                    </div>
                    {/*Kurzbg */}
                    <SubHeadingComponent>WORKSHOP TEACHERS AT KBG</SubHeadingComponent>
                    <div className="text-center lg:text-left lg:flex flex-wrap md:space-x-4 mb-12">
                        {Kurzbaugergasse.map((Kurzbaugergasse, index) => (
                            <div key={index} className="w-full md:w-auto">
                                <ParagraphComponent>{Kurzbaugergasse.name}</ParagraphComponent>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
            {/* Rolling text */}
            <div className="bg-performance-act-one">
                <RollingText text="Trigger warning: deals with mental illness" />
            </div>
            <Footer />
        </>
    );
}
