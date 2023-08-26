import { groq } from "next-sanity"; 
import { client } from "./lib/client";
import imageUrlBuilder from '@sanity/image-url'

export async function getData (query : string ){

    try {
        const data = await client.fetch( groq` ${query} ` )
        return ( data )
    } catch (error) {
        return [];
    }
}

const builder = imageUrlBuilder(client);
export const urlFor = (url:any) => builder.image(url);