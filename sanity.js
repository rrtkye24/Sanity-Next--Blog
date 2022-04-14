import{
    // createImageUrlBuilder,
    createCurrentUserHook,
    // createClient,
} from "next-sanity";
import createClient from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';
export const config ={
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-10-21",
    useCdn: process.env.NODE_ENV === "production"
}
export const sanityClient = createClient(config);
//set up the client for fetching data in the getProps page function

export const urlFor = (source) => createImageUrlBuilder(config).image(source);
//set up a helper function for generating image URL'S with only the asset reference data in your document
// https://www.sanity.io/docs/image-url 
export const useCurrentUser = createCurrentUserHook(config);
//yess