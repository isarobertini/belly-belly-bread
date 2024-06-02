import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { collaborations } from "../data/CollaborationData";
import { RollingText } from "../common/RollingText";

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

                    <HeadingComponent className="text-4xl md:text-5xl">Collaborations</HeadingComponent>

                    {/*collabs */}
                    <div className="flex flex-wrap justify-center">
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
