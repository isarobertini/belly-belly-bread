import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

import { NavigationMenu } from "../common/NavigationMenu";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { RollingText } from "../reusableComponents/RollingText";
import { VideoComponent } from "../reusableComponents/videoComponent";
import { Footer } from "../reusableComponents/footer";
import { MaterialPopup } from "../popups/MaterialPopup";
import { TitlesPopup } from "../popups/titlesPopup";
import { Gallery } from "../imgGallery/imgGallery"
import placeholderVideo from "../assets/installation/placeholder_video.mp4";
import floorPlan1 from "../assets/installation/floorplan1.webp";
import floorPlan2 from "../assets/installation/floorplan2.webp";
import floorPlan3 from "../assets/installation/floorplan3.webp";
import Materials from "../assets/installation/materials.png";
import installationHeading from "../assets/installation/installationHeading.webp";


export const Installation = () => {
    return (
        <>
            <Helmet>
                <title>Installation - Belly Belly Bread</title>
                <meta name="description" content="Explore the installation section of Belly Belly Bread, featuring the floor plan, transcript of opera lessons, 16mm video, and documentation of the project. Trigger warning: deals with mental illness." />
            </Helmet>

            <div className="bg-pink-bright">
                {/* Rolling text */}
                <RollingText text="Trigger warning: deals with mental illness" />
                <NavigationMenu />
            </div>

            <div className="w-full bg-performance-act-one overflow-hidden">
                <RollingText scrollamount="3" text="cry like the crying bread table" />
            </div>

            <div className="bg-performance-act-one">

                <div className="flex flex-col items-center">
                    <TitlesPopup />
                    <MaterialPopup />
                    <div className="md:w-6/12 justify-center">
                        {/* Heading */}
                        <Fade>
                            <div className="flex flex-col md:flex-row w-full justify-center items-center">
                                <ImageComponent className="md:h-96" src={installationHeading} disableModal />
                            </div>
                        </Fade>
                        <Fade>
                            <div>
                                <SubHeadingComponent>Floorplan of Belly Belly Bread</SubHeadingComponent>
                                <div className="text-center">
                                    <ParagraphComponent>Made by Hedda Bauer in collaboration with Kofi</ParagraphComponent>
                                </div>
                                <div className="flex flex-col md:flex-row w-full justify-center items-center">
                                    <ImageComponent className="h-96 transition duration-150 hover:scale-105 ease-in-out" src={floorPlan2} />
                                    <ImageComponent className="h-96 transition duration-150 hover:scale-105 ease-in-out" src={floorPlan3} />
                                    <ImageComponent className="h-96 transition duration-150 hover:scale-105 ease-in-out" src={floorPlan1} />
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className="w-full bg-performance-act-one overflow-hidden my-12">
                        <RollingText scrollamount="5" text="the desk is from Lennart Schweder" />
                    </div>
                    <div className="w-full mb-12 bg-performance-act-one overflow-hidden">
                        <RollingText
                            scrollamount="2"
                            text="some materials"
                            imageUrl={Materials}
                            height="150px"
                            imgWidth="120px"
                            imgHeight="120px"
                        />
                    </div>

                    <div className="my-12 md:w-6/12 justify-center">
                        {/* Transcript of opera lesson */}
                        <div className="">
                            {/* Video */}
                            <SubHeadingComponent>16mm film of the performance</SubHeadingComponent>
                            <VideoComponent className="" src={placeholderVideo} controls />
                        </div>
                    </div>
                    {/* Video and Documentation */}
                    <Fade>
                        <div className="my-12 flex flex-col items-center">
                            <div className="flex flex-col md:flex-row md:justify-center md:space-x-6">
                                <div>
                                    {/* Documentation Gallery */}
                                    <SubHeadingComponent>Documentation of the installation</SubHeadingComponent>
                                    <Gallery />

                                </div>

                            </div>
                        </div>
                    </Fade>

                    <div className="md:w-6/12 justify-center">
                        <SubHeadingComponent>Transcript of opera lessons </SubHeadingComponent>
                        <ParagraphComponent>
                            You can’t hear what you do, you can only hear it in reverb, so what is coming back to you is what you here, that is correct, Not what you hear in your own head. So it’s very ”count actigt”? and it's very hard to understand ”avensiteten”? Because I have played music since I was very little, and I started to sing very late, when I was nineteen, so that thought that I couldn’t trust what I do. <br />
                            -no I start with the basics, so we have three different sound rooms”<br />
                            We have a breast sound, if this is the chest, and this is the neck and this is the head. <br />
                            This is one sound room (she points at a part under the belly button), this is one (points at the chest), and this is one (points at the head) <br />
                            -so you use our neck and your face and all of these points has an equal match <br />
                            -so this is something that is good to know, I think we should try something and I want you to do something that is very easy, just burr <br />
                            -burrrburrburrrburrr <br />
                            -and do it standing towards this wall, you have your back, is it okey if I touch you? you just stand like that (the teacher puts her hand on my crooked part of my back) <br />

                            so I shouldn’t take so much power? I ask, should I just do it as I breathe? I ask <br />
                            Yes, completely, just as natural as possible, <br />
                            Brrrrrrrrrbrrrbrrrrr <br />
                            -it's very nice, you have a very nice O in you, she says, <br />
                            -so if you think of an O, <br />
                            -so if you think of a O you get a really good round room, she says. <br />
                            -what I really want, with this, is that if we call everything an instrument (and she points at the drawing) and of course all the body is the instrument but the three once are the ”active” instrument. <br />
                            -So the active instrument is really here- and she makes a line under the belly button so that it becomes a triangle. <br />
                            -I start to giggle as a kid, what, are you saying? that I am singing with my cunt? Is that what you call the diaphragm? <br />
                            -No, that is what we have here, she points at the chest, <br />
                            Ah that is under your breasts, <br />
                            -it sits here, it's the raptor, you can feel it here (and she starts burring) <br />
                            -it's not sexual, but of course it is sexual as well, the one who says that singing is not sexual is really stupid. <br />
                            -because it is very sensual to sing, it's very sensual to sing, because you activate your backbone, and that is going up, and you just start to say oooo and burrr, can you find the feeling? <br />
                            -there is a vibration, that is what ”bel canto” is, it's a tension, ohohohhhhhhhhhh, I feel like you know something, and you understand and I feel that with you. I think you understand <br />
                            -This mouth (points at the mouth on the drawing) doesn’t mean a mouth but a room. And your gane, you have a ”(27.47prou game and a blou gane”) and you have a bone, here here, (she points in the mouth) and far in <br />
                            -yes yes far away in there by the tongue I respond giggling) <br />
                            And that is doing this”putting it up” <br />
                            And we have so many exercises, just this burr one, A tract and O tract <br />
                            -and we should just sing, <br />
                            -what do you think is fun to sing? <br />
                            -what should and would you like to say? <br />
                            -ahhh, something easy, I respond, I am thinking so much, and judging myself so I’m open, <br />
                            -I will just follow you, <br />
                            -okey so we start <br />
                            We start with a vowel <br />
                            -and I open up and I follow her piano, <br />
                            -try to hold for your ears and then you (23.30), and now you try to make it with one long (pgrassane?) <br />
                            -I try to sing like walking up a step <br />
                            -can you try, because A is kind of hard, but try to do an O <br />
                            -it's very soft and feminine <br />
                            -I do the OOOOOOOOO like a step <br />
                            -and I start to make an OO but I’m so nervous and the throat just stop <br />
                            -just a legato she says, <br />
                            -can you tell me what a Lagato is? I ask <br />
                        </ParagraphComponent>
                    </div>

                </div>

                {/* Rolling text */}
                <RollingText text="Trigger warning: deals with mental illness" />
            </div >
            <Footer />
        </>
    );
}
