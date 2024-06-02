import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { RollingText } from "../common/RollingText";
import { ButtonComponent } from "../reusableComponents/buttonComponent";

export const Performance = () => {
    return (
        <>
            <div className="bg-pink-bright">
                {/* Rolling text */}
                <RollingText text="Trigger warning: deals with mental illness" />
                <NavigationMenu />
            </div>

            <div className="bg-performance-act-one">
                <RollingText scrollamount="3" text="perform! perform!" />
            </div>

            <div className="flex flex-col h-screen items-center bg-performance-act-one">
                <div className="md:w-6/12 justify-center">

                    <HeadingComponent>Performance</HeadingComponent>

                    <div className="my-6">
                        <SubHeadingComponent>Performance: 16, 23, 30th of june, 14h</SubHeadingComponent>
                        <SubHeadingComponent>Kurzbaugergasse 9, 1020 Wien</SubHeadingComponent>
                    </div>

                    <div className="my-6">
                        <SubHeadingComponent>Operette in 3 acts</SubHeadingComponent>
                    </div>

                    <div className="flex justify-center flex items-center bg-performance-act-one">
                        <ButtonComponent to="/performance/act1" label="Go to Act 1" />
                        <ButtonComponent to="/performance/act2" label="Go to Act 2" />
                        <ButtonComponent to="/performance/act3" label="Go to Act 3" />
                    </div>
                </div>
            </div>

        </>
    )
}