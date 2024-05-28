import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { collaborations } from "../data/CollaborationData";
import { NumberCircleComponent } from "../reusableComponents/numberCircleComponent";

export const Collaborations = () => {
    return (
        <>
            <div>
                <NavigationMenu />
            </div>

            <div className="overflow-hidden h-screen flex flex-col items-center bg-brown-dark">
                <div className="md:w-6/12 w-full flex flex-col items-center justify-center">

                    <HeadingComponent className="text-4xl md:text-5xl">Collaborations</HeadingComponent>

                    {/*page num*/}
                    <NumberCircleComponent number={5} />

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