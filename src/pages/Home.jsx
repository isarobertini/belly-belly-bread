import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { RollingText } from "../common/RollingText";
import { Footer } from "../reusableComponents/footer";

import BellyPoster from "../assets/home/Vektor-Smartobjekt.png"
import belly1 from "../assets/home/belly1.png"
import belly2 from "../assets/home/belly2.png"
import bread from "../assets/home/bread.png"
import "../../src/font.css"

export const Home = () => {
    return (
        <>
            <div className="bg-pink-bright">
                {/* Rolling text */}
                <RollingText text="Trigger warning: deals with mental illness" />
                <NavigationMenu />
            </div>
            <div className="bg-performance-act-one overflow-hidden">
                <RollingText scrollamount="3" text="crunchy crunchy maybe add some butter" />

                <div className="flex flex-col items-center">
                    <div className="flex flex-col md:flex-row w-full justify-center items-center ">
                        <ImageComponent className="w-full md:w-1/3" src={belly1} disableModal />
                        <ImageComponent className="w-full md:w-1/3" src={belly2} disableModal />
                        <ImageComponent className="w-full md:w-1/3" src={bread} disableModal />
                    </div>

                    <HeadingComponent>Diploma by <br />Hedda Bauer</HeadingComponent>
                </div>

                <div className="flex flex-col items-center mb-12">
                    <div className="md:w-4/12 justify-center">
                        <ImageComponent className="bg-performance-act-one w-full border-none p-0 m-0" src={BellyPoster} />
                    </div>
                </div>

                {/* Rolling text */}
                <RollingText text="Trigger warning: deals with mental illness" />
            </div >
            <Footer />
        </>
    )
}