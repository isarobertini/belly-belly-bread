
export const RollingText = ({ text, imageUrl, behavior = "scroll", scrollamount = "5", direction = "left", width = "100%", height = "auto", imgWidth = "auto", imgHeight = "auto" }) => {
    return (
        <marquee
            behavior={behavior}
            scrollamount={scrollamount}
            direction={direction}
            className="border-yellow-bright border-2 bg-orange-bright text-m p-1 font-sans text-yellow-bright m-0 p-0 flex items-center"
            style={{ width: width, height: height }}
        >
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt="Rolling"
                    className="mr-2"
                    style={{ width: imgWidth, height: imgHeight }}
                />
            )}
            {text}
        </marquee>
    );
};
