import { createClient } from 'contentful';

export const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master',
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
});
