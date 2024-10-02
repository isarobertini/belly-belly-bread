import { useEffect, useState } from "react";
import { client } from "../../contentfulClient"; // Your Contentful client
import { ImageComponent } from "../reusableComponents/imageComponent"; // Your reusable image component
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";

export const InstallationFloorplan = () => {
    const [floorplans, setFloorplans] = useState(null); // State to hold the floorplan data
    const [loading, setLoading] = useState(true); // Loading state to show while data is being fetched

    useEffect(() => {
        // Fetch the entry of content type 'installation' with the specific ID
        client.getEntry('7JL4ugnYVuTASQxZTWoxP5')
            .then((entry) => {
                if (entry.fields.floorplans) {
                    setFloorplans(entry.fields.floorplans); // Assuming 'floorplans' is a field in the entry
                }
                setLoading(false); // Stop loading once data is fetched
            })
            .catch((error) => {
                console.error("Error fetching floorplans:", error);
                setLoading(false); // Stop loading if there's an error
            });
    }, []);

    // Show loading message while fetching data
    if (loading) {
        return <div>Loading floorplans...</div>;
    }

    // Render a fallback message if no floorplans are available
    if (!floorplans || floorplans.length === 0) {
        return <div>No floorplans available.</div>;
    }

    return (
        <div className="flex flex-col md:flex-row w-full justify-center items-center">
            {floorplans.map((item, index) => {
                const assetUrl = item.fields.file.url; // Assuming there's a 'file' field for each asset
                const assetTitle = item.fields.title || ""; // Use the title if available
                const assetDescription = item.fields.description || ""; // Optional description

                return (
                    <div key={index} className="my-4">
                        {/* Render each floorplan as an image */}
                        <ImageComponent src={assetUrl} alt={assetTitle} className="h-auto transition duration-150 hover:scale-105 ease-in-out" />
                        <SubHeadingComponent>{assetTitle}</SubHeadingComponent>
                        {assetDescription && <ParagraphComponent>{assetDescription}</ParagraphComponent>}
                    </div>
                );
            })}
        </div>
    );
};
