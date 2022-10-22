import sanityClient, { SanityClient } from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url'

export const cmsClient: SanityClient = sanityClient({
    projectId: '2v8gzwep', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    useCdn: true, // `false` if you want to ensure fresh data
    token: process.env.sanityToken
})

const builder = imageUrlBuilder(cmsClient)

export const urlFor = (source) => {
    return builder.image(source)
}

export const slice = (limit: number | undefined) => limit ? `[0...${limit}]` : ''