import { NavigationMenu } from "../common/NavigationMenu";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { RollingText } from "../common/RollingText";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";

import aboutHeading from "../assets/about/aboutHeading.png"
import AboutBellyBread from "../assets/about/about.webp"

export const About = () => {
    return (
        <>
            <div className="bg-pink-bright">
                {/* Rolling text */}
                <RollingText text="Trigger warning: deals with mental illness" />
                <NavigationMenu />
            </div>

            <div className="bg-performance-act-one overflow-hidden">
                <RollingText scrollamount="3" text="it's not about you" />
            </div>

            <div className="h-auto flex flex-col items-center bg-performance-act-one">
                <div className="md:w-6/12 justify-center">

                    <div className="flex flex-col md:flex-row w-full justify-center items-center">
                        <ImageComponent className="md:h-96" src={aboutHeading} disableModal />

                    </div>

                    <ImageComponent src={AboutBellyBread} />

                    <SubHeadingComponent>Text by Mark reflecting on Hedda Bauers art work</SubHeadingComponent>

                    <div className="flex flex-col items-center">
                        <div className="">
                            <ImageComponent src="https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xNzA3MzgzNS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTczOTMzNDAzMH0.PRKjSo6w0KsIQ8z7RRqt0vKs9EiDtUTPmSyS6lCJ1FM/img.jpg?width=1200&height=800&quality=100&coordinates=7%2C0%2C7%2C0" />
                            <ParagraphComponent>Work by Lexie Smith</ParagraphComponent>
                        </div>
                    </div>

                    <SubHeadingComponent>Floorplan?</SubHeadingComponent>

                    <SubHeadingComponent>Contact</SubHeadingComponent>
                    <div className="flex flex-col md:flex-row w-full justify-center items-center mb-12">
                        <div className="bg-yellow-bright border-2 border-black m-2 p-2">
                            <a href="https://www.heddabauer.com/" target="_blank" rel="noopener noreferrer" className="text-pink-bright underline p-2">
                                https://www.heddabauer.com/
                            </a>
                        </div>
                        <div className="bg-yellow-bright border-2 border-black m-2 p-2">
                            <a href="mailto:heddabauer@gmail.com" className="text-pink-bright underline">
                                heddabauer@gmail.com
                            </a>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}