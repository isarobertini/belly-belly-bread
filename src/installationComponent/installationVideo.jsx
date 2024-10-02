import { useEffect, useState } from "react";
import { client } from "../../contentfulClient";
import { VideoComponent } from "../reusableComponents/videoComponent";
import { SubHeadingComponent } from "../reusableComponents/subHeadingComponent";
import { ParagraphComponent } from "../reusableComponents/paragraphComponent";

export const InstallationVideo = () => {
    const [installationVideos, setInstallationVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                const response = await client.getEntry("7JL4ugnYVuTASQxZTWoxP5");
                console.log("Fetched entry:", response); // Log the entire response

                const videoData = response.fields.installationVideo || [];
                setInstallationVideos(videoData);

                // Check if videoData has items and extract title and description from the first item
                if (videoData.length > 0) {
                    const firstVideo = videoData[0].fields; // Get the first video object
                    setTitle(firstVideo.title || "Default Title"); // Access title from the first video
                    setDescription(firstVideo.description || "No description available."); // Access description from the first video
                } else {
                    setTitle("No title available.");
                    setDescription("No description available.");
                }

                setLoading(false);
            } catch (error) {
                console.error("Error fetching video data:", error.message);
                console.error("Full error:", error);
                setLoading(false);
            }
        };

        fetchVideoData();
    }, []);

    return (
        <div className="my-12 md:w-6/12 justify-center">
            {loading ? (
                <p>Loading videos...</p>
            ) : installationVideos.length > 0 ? (
                <>
                    <SubHeadingComponent>{title}</SubHeadingComponent> {/* Display Title */}
                    {installationVideos.map((video) => (
                        <VideoComponent key={video.sys.id} src={video.fields.file.url} controls />
                    ))}
                    <ParagraphComponent>{description}</ParagraphComponent> {/* Display Description */}
                </>
            ) : (
                <p>No videos available.</p>
            )}
        </div>
    );
};
