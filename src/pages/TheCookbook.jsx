import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { RollingText } from "../common/RollingText";

import Kokbok from "../assets/cookBook/Bakverk.pdf";

export const TheCookbook = () => {
    return (
        <>
            <div className="bg-pink-light">
                {/* Rolling text */}
                <RollingText text="Trigger warning: deals with mental illness" />
                <NavigationMenu />
            </div>

            <div className="bg-brown-dark">
                <div className="flex flex-col items-center">
                    <div className="md:w-6/12 justify-center">
                        <HeadingComponent>The Cookbook</HeadingComponent>

                        <SubHeadingComponent>The cookbook that Catharina Bauer (Hedda Bauers grandmother) gave to Marika Bauer (Hedda Bauers mom)</SubHeadingComponent>

                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <object className="my-6 h-screen w-11/12 lg:w-6/12" data={Kokbok} type="application/pdf" aria-label="The Cookbook PDF">
                        <p>Your browser does not support PDFs. Download the PDF to view it: <a href={Kokbok}>Download PDF</a>.</p>
                    </object>
                </div>
            </div>
        </>
    );
};
