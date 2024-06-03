import { NavigationMenu } from "../common/NavigationMenu";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { collaborations } from "../data/CollaborationData";
import { RollingText } from "../common/RollingText";
import { ImageComponent } from "../reusableComponents/imageComponent";

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

            <div className="overflow-hidden h-screen flex flex-col items-center bg-performance-act-one">
                <div className="md:w-6/12 w-full flex flex-col items-center justify-center">

                    <div className="flex flex-col md:flex-row w-full justify-center items-center">
                        <ImageComponent className="h-96" src={collaborationHeading} />

                    </div>

                    {/*collabs */}
                    <div className="justify-center">
                        {collaborations.map((collaboration, index) => (
                            <div key={index} className="w-full md:w-auto p-2">
                                <SubHeadingComponent>{collaboration.name}</SubHeadingComponent>
                            </div>
                        ))}

                    </div>
                    <div className="m-6">
                        {/*thanks to */}
                        <SubHeadingComponent>Also many thanks to name name name name name name name namename name name namename name name name</SubHeadingComponent>
                    </div>
                </div>
            </div>
        </>
    );
}
