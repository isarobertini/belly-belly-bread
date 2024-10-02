import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { client } from "../../contentfulClient";
import { NavigationMenu } from "../common/NavigationMenu";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { RollingText } from "../reusableComponents/RollingText";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { Footer } from "../reusableComponents/footer";

import aboutHeading from "../assets/about/aboutHeading.webp";
import AboutBellyBread from "../assets/about/about.webp";

export const About = () => {
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const response = await client.getEntry("4AJjO6GSf3vulm6vbSnlKg");
                console.log("Fetched entry:", response); // Log the entire response

                // Create an array of content objects to map through
                const aboutContent = [
                    { title: response.fields.aboutWorkTitle || "About the work!", content: response.fields.aboutWork || "" },
                    { title: response.fields.aboutBookTitle || "Prinsessornas Nya Kokbok Preface", content: response.fields.aboutBook || "" }
                ];

                setContent(aboutContent);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching About data:", error.message);
                console.error("Full error:", error);
                setLoading(false);
            }
        };

        fetchAboutData();
    }, []);

    if (loading) {
        return <p>Loading about content...</p>;
    }

    return (
        <>
            <Helmet>
                <title>About - Belly Belly Bread</title>
                <meta name="description" content="Contact information for Hedda Bauer. Trigger warning: deals with mental illness." />
            </Helmet>

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

                    {/* Map through content */}
                    {content.map((item, index) => (
                        <div key={index}>
                            <Fade>
                                <SubHeadingComponent>{item.title}</SubHeadingComponent>
                            </Fade>
                            <Fade>
                                <ParagraphComponent>{item.content}</ParagraphComponent>
                            </Fade>
                        </div>
                    ))}

                    {/* Contact */}
                    <div className="my-12">
                        <SubHeadingComponent>Contact Hedda Bauer</SubHeadingComponent>
                    </div>

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
            </div>
            {/* Rolling text */}
            <div className="bg-performance-act-one">
                <RollingText text="Trigger warning: deals with mental illness" />
            </div>
            <Footer />
        </>
    );
};
