import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";

export const HeddaReading = () => {
    return (
        <>
            <div>
                <NavigationMenu />
            </div>

            <div>
                <HeadingComponent>BellyBellyReading</HeadingComponent>
                <SubHeadingComponent>this is a subtext about the reading</SubHeadingComponent>

            </div>
        </>
    )
}