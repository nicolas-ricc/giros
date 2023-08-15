import axios from "axios"
import sanityClient, { SanityClient } from '@sanity/client'

const cmsClient: SanityClient = sanityClient({
    projectId: '2v8gzwep', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    useCdn: true // `false` if you want to ensure fresh data
})
