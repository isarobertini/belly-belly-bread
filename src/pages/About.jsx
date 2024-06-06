import { Fade } from "react-awesome-reveal";

import { NavigationMenu } from "../common/NavigationMenu";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { RollingText } from "../reusableComponents/RollingText";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { Footer } from "../reusableComponents/footer";

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
                    {/* Heading */}
                    <Fade>
                        <div className="flex flex-col md:flex-row w-full justify-center items-center">
                            <ImageComponent className="md:h-96" src={aboutHeading} disableModal />
                        </div>
                    </Fade>

                    <Fade>
                        <ImageComponent src={AboutBellyBread} disableModal />
                    </Fade>
                    {/* Floorplan and Breadpic */}
                    <div className="flex flex-col items-center bg-performance-act-one">
                        <Fade>
                            <div>
                                <SubHeadingComponent>Work by Lexie Smith</SubHeadingComponent>
                                <ImageComponent className="" src="https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xNzA3MzgzNS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTczOTMzNDAzMH0.PRKjSo6w0KsIQ8z7RRqt0vKs9EiDtUTPmSyS6lCJ1FM/img.jpg?width=1200&height=800&quality=100&coordinates=7%2C0%2C7%2C0" />

                            </div>
                        </Fade>
                    </div>
                    {/* Marks text */}
                    <div className="flex justify-center">
                        <div>
                            <SubHeadingComponent>Text by Mark reflecting on Hedda Bauers art work</SubHeadingComponent>
                            <ParagraphComponent>In a dimly lit gallery, the scent of freshly baked bread permeates the air, inviting visitors to an extraordinary sensory experience. "The Bread of Life" installation by avant-garde artist Hedda Bauer challenges conventional boundaries between art, sustenance, and life itself.

                                Towering loaves, intricately woven from diverse grains, rise majestically from the floor, each representing a unique culture's relationship with bread. The golden hues of wheat, the deep brown of rye, and the speckled textures of multigrain loaves create a visual feast, highlighting the diversity and unity found in this universal staple.

                                Suspended from the ceiling are delicate, transparent orbs filled with flour, water, and yeast, the elemental components of bread. These floating symbols remind viewers of the simplicity and complexity inherent in the art of bread-making. Each orb casts subtle shadows on the walls, dancing with the soft flicker of candlelight strategically placed around the exhibit.

                                Interactive elements invite visitors to touch, smell, and even taste the bread, breaking the traditional "look but don't touch" barrier of art exhibitions. Embedded speakers softly play the rhythmic sounds of kneading dough, interspersed with whispered stories of bread-making traditions from around the world.

                                At the heart of the installation stands a communal table, laden with freshly baked bread for sharing. It serves as a meeting point for strangers and friends alike, encouraging conversations and connections over the breaking of bread. Here, Bauer emphasizes the communal aspect of bread, its role in fostering relationships and nurturing the soul.

                                "The Bread of Life" is not just an installation; it is an immersive experience that celebrates the profound, everyday artistry of bread. Through this installation, Bauer elevates bread from mere sustenance to a metaphor for life's richness and interconnectedness, urging us to appreciate the beauty in the ordinary.</ParagraphComponent>
                        </div>
                    </div>

                    {/* Contact */}
                    <SubHeadingComponent>Contact Hedda Bauer</SubHeadingComponent>
                    <div className="flex flex-col md:flex-row w-full justify-center items-center mb-12">
                        <div className="bg-yellow-bright border-2 border-black m-2 p-2 hover:transform hover:scale-105 transition duration-300 ease-in-out">
                            <a href="https://www.heddabauer.com/" target="_blank" rel="noopener noreferrer" className="text-pink-bright underline p-2">
                                https://www.heddabauer.com/
                            </a>
                        </div>
                        <div className="bg-yellow-bright border-2 border-black m-2 p-2 hover:transform hover:scale-105 transition duration-300 ease-in-out">
                            <a href="mailto:heddabauer@gmail.com" className="text-pink-bright underline">
                                heddabauer@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

            </div >
            {/* Rolling text */}
            < div className="bg-performance-act-one" >
                <RollingText text="Trigger warning: deals with mental illness" />
            </div >
            <Footer />
        </>
    )
}