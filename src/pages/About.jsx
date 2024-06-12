import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

import { NavigationMenu } from "../common/NavigationMenu";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { RollingText } from "../reusableComponents/RollingText";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { Footer } from "../reusableComponents/footer";

import aboutHeading from "../assets/about/aboutHeading.webp"
import AboutBellyBread from "../assets/about/about.webp"

export const About = () => {
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
                    <div>
                        <div className="my-12">
                            <SubHeadingComponent>Prinsessornas Nya Kokbok<br /> Preface</SubHeadingComponent>
                        </div>

                        <ParagraphComponent>Times change, and so does the art of cooking. A cookbook that aims to meet modern demands must not only provide instructions for good food but also consider that the good food should satisfy modern nutritional requirements. It should also acknowledge the fact that contemporary housewives often manage without, or with very little, household help, and sometimes have to juggle both professional work and household chores.
                            <br /> <br />
                            In this work, I have strived to combine the requirements of nutritional quality with the demands for rational methods in cooking, without compromising on quality. Fortunately, the rush of modern times hasn't diminished the traditional significance of "good food."
                            <br /> <br />
                            For the nutritional perspectives, as well as the nutritional table in color found at the end of the book and the composition of the weekly menus, I have had the privilege and pleasure of the expert and valuable collaboration of Dr. Axel Blomberg. Folmer Dam, a member of the Danish State Household Council and principal of the Ankerhus Household Seminary, stayed in our country as a refugee during the war. He has greatly helped me realize the desired goal of a modern cookbook: rationality in meal composition and cooking methods. His skilled hand is evident in the vegetable, salad, and fish recipes, which are arranged according to their approximate vitamin content, and in the General Instructions that introduce each chapter. These instructions are designed to avoid constant repetition and are meant to guide all recipes within the chapter. Therefore, they should be read first if the individual recipe descriptions are to be fully understood. I hope this arrangement will be appreciated as the simplification it is intended to be.
                            <br /> <br />
                            Of the recipes included in "The Princesses' New Cookbook," approximately one-third—over 800—are new and have not been previously published in book form. The remaining recipes are the most popular ones from my previous works, "The Princesses' Cookbook" and "More Good Food." The collection aims primarily to provide ideas and instructions for preparing good everyday meals at reasonable costs. Additionally, it includes suitable dishes for various social occasions, from impromptu tea suppers to more formal dinners and lunches. When selecting appropriate dishes for such events, I have particularly tried to include recipes that can be fully or partially prepared in advance without compromising on quality, requiring only minimal effort when served. The relatively large section dedicated to cold dishes and small dishes is justified by the same reasoning. The illustrations, made from original photographs, are primarily intended to facilitate the preparation and presentation of the dishes. Where necessary, I have indicated ways to make the dish simpler or more elaborate.
                            <br /> <br />
                            In conclusion, I would like to emphasize that the recipes in this book have been thoroughly tested under conditions comparable to those found in a typical, reasonably well-equipped family kitchen. Special utensils have been assumed only in exceptional cases.
                            <br /> <br />
                            I sincerely hope that both young and more experienced housewives will find practical value in this book.
                            <br /> <br />
                            Stockholm, January 1948.
                            <br /> <br />
                            Jenny Åkerström</ParagraphComponent></div>

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

            </div >
            {/* Rolling text */}
            < div className="bg-performance-act-one" >
                <RollingText text="Trigger warning: deals with mental illness" />
            </div >
            <Footer />
        </>
    )
}