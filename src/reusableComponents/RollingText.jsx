
export const RollingText = ({ text, behavior = "scroll", scrollamount = "5", direction = "left" }) => {
    return (

        <marquee
            behavior={behavior}
            scrollamount={scrollamount}
            direction={direction}
            className="border-yellow-bright border-2 bg-orange-bright text-m p-1 font-sans text-yellow-bright m-0 p-0"
        >
            {text}
        </marquee>
    );
};

