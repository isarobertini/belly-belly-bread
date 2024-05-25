import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";

export const Sketches = () => {
    return (
        <div className="">
            <NavigationMenu />

            <div className="h-screen">
                <HeadingComponent>Sketches</HeadingComponent>
            </div>
        </div>
    )
}