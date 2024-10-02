import { useState, useEffect } from 'react';
import { client } from "../../contentfulClient";  // Import Contentful client

export const CollaborationsFetcher = ({ onFetchComplete }) => {
    const [loading, setLoading] = useState(true); // Loading state to manage API fetch

    useEffect(() => {
        const fetchCollaborations = async () => {
            try {
                const response = await client.getEntry('2uB5W8WlBzAOoMmozjOcgT'); // Entry ID
                const collaborationFields = response.fields; // Access the fields directly

                const collaborationsArray = Object.keys(collaborationFields).map(key => {
                    const collaboration = collaborationFields[key][0]?.fields; // Get the first element's fields
                    return {
                        id: key,
                        name: collaboration?.title || 'No title available',
                        description: collaboration?.description || 'No description available',
                        file: collaboration?.file || null // Assuming there's a file object for the image
                    };
                }).filter(item => item.file); // Filter out collaborations without files

                onFetchComplete(collaborationsArray); // Call the callback with the fetched data
            } catch (error) {
                console.error("Error fetching collaboration data from Contentful:", error);
            } finally {
                setLoading(false); // Set loading to false after fetch
            }
        };

        fetchCollaborations();
    }, [onFetchComplete]); // Dependency array includes onFetchComplete

    return loading; // Return loading state if needed, could also return null
};

