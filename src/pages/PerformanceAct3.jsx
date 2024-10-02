import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

import { client } from "../../contentfulClient";
import { NavigationMenu } from "../common/NavigationMenu";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { RollingText } from "../reusableComponents/RollingText";
import { SubSubHeadingComponent } from "../reusableComponents/subSubHeadingComponent";
import { Footer } from "../reusableComponents/footer";
import { Acts } from "../common/Acts";
import { CastaDivaText } from "../popups/castaDivaText";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";

import ActHeading from "../assets/performance/ActHeading.webp";
import threeHeading from "../assets/performance/threeHeading.webp";
import Sketch from "../assets/performance/sketch.webp";
import Callas from "../assets/performance/Callas.webp"

export const PerformanceAct3 = () => {
    const [data, setData] = useState(null); // State to hold the fetched data

    useEffect(() => {
        window.scrollTo(0, 0);

        // Fetch data from Contentful
        client.getEntry('7498nUO50ecU9eV7h5Yc9C') // Replace with your entry ID
            .then((entry) => {
                setData(entry.fields);
                console.log(entry.fields); // Log the fetched data to see its structure
            })
            .catch(console.error);

    }, []);

    const location = useLocation();

    // Check if data is available before rendering
    if (!data) {
        return <div>Loading...</div>; // Optionally show a loading state
    }

    return (
        <>
            <Helmet>
                <title>Performance Act 3 - Belly Belly Bread</title>
                <meta name="description" content="Discover how to find your inner diva with Act 3 of Belly Belly Bread's performance featuring Maria Callas. Trigger warning: deals with mental illness." />
            </Helmet>

            <div className="bg-pink-bright">
                {/* Rolling text */}
                <RollingText text="Trigger warning: deals with mental illness" />
                <NavigationMenu />
            </div>

            <div className="bg-performance-act-one overflow-hidden">
                <RollingText scrollamount="3" text="how to find your inner diva" />
            </div>

            <div className="flex flex-col items-center bg-performance-act-one">
                <div className="md:w-6/12 justify-center">

                    <Fade>
                        <div className="flex flex-col md:flex-row w-full justify-center items-center">
                            <ImageComponent className="w-52 md:w-96" src={ActHeading} disableModal />
                            <ImageComponent className="w-52 md:w-60" src={threeHeading} disableModal />
                        </div>
                    </Fade>

                    <div className="">

                        <CastaDivaText />

                        <div className="my-12">

                            <SubSubHeadingComponent className="underline decoration-solid">{data.title}</SubSubHeadingComponent>
                            <SubSubHeadingComponent>{data.subTitle}</SubSubHeadingComponent>

                            <div className="bg-performance-act-one flex items-center justify-center">
                                <div className="w-52 border-2 border-black p-0 m-4 bg-orange-bright hover:transform hover:scale-105 transition duration-300 ease-in-out">
                                    <ImageComponent src={Callas} />
                                </div>
                            </div>
                            <SubSubHeadingComponent className="text-orange-bright">Protagonist: Maria Callas</SubSubHeadingComponent>
                            <ParagraphComponent>{data.paragraph}</ParagraphComponent>

                            <Fade>
                                <ImageComponent src={Sketch} />
                            </Fade>
                        </div>
                    </div>
                    <div className="flex flex-col items-center bg-performance-act-one">
                        <div className="my-12 md:w-6/12 justify-center ">
                            {data.documentation && data.documentation.length > 0 ? (
                                data.documentation.map((item) => {
                                    const { fields } = item; // Access fields of the documentation item
                                    const assetUrl = fields.file?.url; // Assuming the structure contains a 'file' field
                                    const assetTitle = fields.title || "Document"; // Use a title if available
                                    const assetDescription = fields.description || ""; // Extract description or set default to empty

                                    if (fields.file.contentType.startsWith('video/')) {
                                        return (
                                            <div key={fields.id} className="m-4">
                                                <video controls className="">
                                                    <source src={assetUrl} type={fields.file.contentType} />
                                                    Your browser does not support the video tag.
                                                </video>
                                                <SubHeadingComponent>{assetTitle}</SubHeadingComponent>
                                                <ParagraphComponent>{assetDescription}</ParagraphComponent>
                                            </div>
                                        );
                                    } else if (fields.file.contentType.startsWith('image/')) {
                                        return (
                                            <div key={fields.id} className="my-4">
                                                <ImageComponent src={assetUrl} alt={assetTitle} className="w-full md:w-8/12" />
                                                <SubHeadingComponent>{assetTitle}</SubHeadingComponent>
                                                <ParagraphComponent>{assetDescription}</ParagraphComponent>
                                            </div>
                                        );
                                    } else {
                                        return null; // Skip if not a video or image
                                    }
                                })
                            ) : (
                                <p></p>
                            )}
                        </div>
                    </div>

                    <Acts />
                </div>
            </div>
            <Footer />
        </>
    )
}
