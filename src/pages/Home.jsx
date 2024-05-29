import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { RollingText } from "../common/RollingText";

import BellyPoster from "../assets/home/Belly_poster.webp"

import "../../src/font.css"

export const Home = () => {
    return (
        <>
            <div className="bg-pink-light">
                {/* Rolling text */}
                <RollingText text="Trigger warning: deals with mental illness" />
                <NavigationMenu />
            </div>

            <div className="bg-brown-dark overflow-hidden">

                <div className="flex flex-col items-center ">
                    <div className="md:w-6/12 justify-center">

                        <HeadingComponent className="">Belly Belly Bread</HeadingComponent>

                        <SubHeadingComponent>Diploma by Hedda Bauer</SubHeadingComponent>

                    </div>
                </div>

                <div className="flex flex-col items-center ">
                    <div className="md:w-6/12 justify-center">
                        <ImageComponent src={BellyPoster} />
                    </div>
                </div>

                {/* Rolling text */}
                <RollingText text="Trigger warning: deals with mental illness" />
            </div >
        </>
    )
}