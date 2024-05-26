import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { Gallery } from "../imgGallery/imgGallery";

export const Sketches = () => {
    return (
        <>
            <div className="">
                <NavigationMenu />
            </div>

            <div className="h-screen">
                <HeadingComponent>Sketches</HeadingComponent>
                <Gallery />
            </div>
        </>
    )
}