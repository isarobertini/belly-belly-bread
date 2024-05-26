import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";

import "../../src/font.css"

export const Home = () => {
    return (
        <>
            <div>
                <NavigationMenu />
            </div>

            <div className="overflow-hidden">
                <HeadingComponent className="">belly belly home</HeadingComponent>
                <SubHeadingComponent>hej hedda, kämpa på med måleriet! du kan nu navigera med hjälp av menyn! ses snart puss</SubHeadingComponent>

                <ImageComponent src="https://images.unsplash.com/photo-1534620808146-d33bb39128b2?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <ParagraphComponent>this is a paragraph that will describe the project or wathevs</ParagraphComponent>
            </div>
        </>
    )
}