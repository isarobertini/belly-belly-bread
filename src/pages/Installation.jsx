import { NavigationMenu } from "../common/NavigationMenu";
import { HeadingComponent } from "../reusableComponents/headingComponent";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";
import { ImageComponent } from "../reusableComponents/imageComponent";
import { RollingText } from "../common/RollingText";

export const Installation = () => {
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
                        <HeadingComponent>Installation</HeadingComponent>

                        <SubHeadingComponent>Installation by Hedda Bauer.</SubHeadingComponent>
                        <ParagraphComponent>Material: bread, crying table, lines, and much more.</ParagraphComponent>
                    </div>
                </div>

                <div className="flex flex-col items-center ">
                    <div className="md:w-6/12 justify-center">
                        <ImageComponent src="https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xNzA3MzgzNS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTczOTMzNDAzMH0.PRKjSo6w0KsIQ8z7RRqt0vKs9EiDtUTPmSyS6lCJ1FM/img.jpg?width=1200&height=800&quality=100&coordinates=7%2C0%2C7%2C0" />
                    </div>
                </div>
            </div>
        </>
    )
}