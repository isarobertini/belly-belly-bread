import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

import { NavigationMenu } from "../common/NavigationMenu";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { RollingText } from "../reusableComponents/RollingText";
import { SubSubHeadingComponent } from "../reusableComponents/subSubHeadingComponent";
import { useLocation } from 'react-router-dom';
import { Footer } from "../reusableComponents/footer";
import { Acts } from "../common/Acts";
import { client } from "../../contentfulClient";

import ActHeading from "../assets/performance/ActHeading.webp";
import oneHeading from "../assets/performance/oneHeading.webp";
import Letter from "../assets/cookBook/letter.webp";
import Bauer from "../assets/performance/Bauer.webp"

export const PerformanceAct1 = () => {

    const [data, setData] = useState(null); // State to hold the fetched data

    useEffect(() => {
        window.scrollTo(0, 0);

        // Fetch data from Contentful
        client.getEntry('1jaZGGtohPbXD85zdD2vu9') // Replace with your entry ID
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
                <title>Performance Act 1 - Belly Belly Bread</title>
                <meta name="description" content="Experience Act 1 of Belly Belly Bread's performance featuring 'The Letter' by Catharina Bauer. Trigger warning: deals with mental illness." />
            </Helmet>
            <div className="bg-pink-bright">
                {/* Rolling text */}
                <RollingText text="Trigger warning: deals with mental illness" />
                <NavigationMenu />
            </div>

            <div className="bg-performance-act-one overflow-hidden">
                <RollingText scrollamount="3" text="Act like it" />
            </div>

            <div className="flex flex-col items-center bg-performance-act-one">
                <div className="md:w-6/12 justify-center">

                    <Fade>
                        <div className="flex flex-col md:flex-row w-full justify-center items-center">
                            <ImageComponent className="w-52 md:w-96" src={ActHeading} disableModal />
                            <ImageComponent className="w-52 md:w-60" src={oneHeading} disableModal />
                        </div>
                    </Fade>
                </div>
            </div>

            <div className="flex flex-col items-center bg-performance-act-one">
                <div className="mt-12 md:w-6/12 justify-center">

                    <SubSubHeadingComponent className="underline decoration-solid">{data.title}</SubSubHeadingComponent>
                    <SubSubHeadingComponent>{data.subTitle}</SubSubHeadingComponent>

                    <div className="bg-performance-act-one flex items-center justify-center">
                        <div className="w-52 border-2 border-black p-0 m-4 bg-orange-bright hover:transform hover:scale-105 transition duration-300 ease-in-out">
                            <ImageComponent src={Bauer} />
                        </div>
                    </div>
                    <SubSubHeadingComponent className="">Protagonist: Catharina Bauer</SubSubHeadingComponent>
                </div>
            </div>

            <div className="flex flex-col items-center bg-performance-act-one">
                <div className="my-12 md:w-6/12 justify-center ">

                    <ParagraphComponent>{data.introductionParagraph}</ParagraphComponent>

                    <Fade>
                        <ImageComponent src={Letter} />
                    </Fade>
                    <div>
                        <SubHeadingComponent>SWE</SubHeadingComponent>
                        <ParagraphComponent className="indent-8">
                            Marika, </ParagraphComponent>
                        <ParagraphComponent className="indent-11">
                            här får Du ett tecken till att ignorera.<br />
                            Den har, liksom den riktiga konsten, sitt eget starka uttryck. <br />
                            Alltså beror det på mottagaren att uttolka det, inget mer. <br />
                            Släng den i Din soptunna.
                        </ParagraphComponent>
                        <ParagraphComponent className="indent-60">Mamma</ParagraphComponent>
                    </div>

                    <div>
                        <SubHeadingComponent>ENG</SubHeadingComponent>

                        <ParagraphComponent className="indent-8">
                            Marika,</ParagraphComponent>
                        <ParagraphComponent className="indent-11">here you get a sign to ignore. <br />
                            It has, like real art, its own strong expression. <br />
                            Therefore it's up to the recipient to interpret it, nothing more. <br />
                            Throw it in your garbish bin.
                        </ParagraphComponent>
                        <ParagraphComponent className="indent-60">Mom</ParagraphComponent>
                    </div>

                    <div>
                        <SubHeadingComponent>DE</SubHeadingComponent>
                        <ParagraphComponent className="indent-8">
                            Marika, </ParagraphComponent><ParagraphComponent className="indent-11">hier bekommst du ein Zeichen, das du ignorieren kannst. <br />
                            Es hat, wie die richtigen Künste, seinen eigenen starken Ausdruck gefunden. <br />
                            Also hängt es von dem/der Empfänger*in ab, es zu interpretieren, nichts Weiteres.<br />
                            Wirf es in deine Mülltonne.
                        </ParagraphComponent>
                        <ParagraphComponent className="indent-60">Mama</ParagraphComponent>
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
