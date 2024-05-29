import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { NumberCircleComponent } from "../reusableComponents/numberCircleComponent";

import BellyPoster from "../assets/home/Belly_poster.webp"

import "../../src/font.css"

export const Home = () => {
    return (
        <>
            <div className="bg-pink-light">
                {/* Rolling text */}
                <marquee behavior="scroll" scrollamount="5" className="border-yellow-bright border-2 font-bold bg-orange-bright text-2xl font-oxygen-mono text-yellow-bright" direction="left">Trigger warning: deals with mental illness</marquee>
                <NavigationMenu />
            </div>

            <div className="bg-brown-dark overflow-hidden">

                <div className="flex flex-col items-center ">
                    <div className="md:w-6/12 justify-center">

                        <HeadingComponent className="">Belly Belly Bread</HeadingComponent>

                        <NumberCircleComponent number={1} />

                        <SubHeadingComponent>Diploma by Hedda Bauer</SubHeadingComponent>
                        <SubHeadingComponent>16, 23, 30th of june, 14h</SubHeadingComponent>
                        <SubHeadingComponent>Kurzbaugergasse 9, 1020 Wien</SubHeadingComponent>
                    </div>
                </div>

                <div className="flex flex-col items-center ">
                    <div className="md:w-6/12 justify-center">
                        <ImageComponent src={BellyPoster} />
                    </div>
                </div>
                {/* Rolling text */}
                <marquee behavior="scroll" scrollamount="5" className="border-yellow-bright border-2 font-bold bg-orange-bright text-2xl font-oxygen-mono text-yellow-bright" direction="left">Trigger warning: deals with mental illness</marquee>

            </div >
        </>
    )
}