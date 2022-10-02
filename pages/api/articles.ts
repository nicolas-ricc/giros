import axios from "axios"
import sanityClient, { SanityClient } from '@sanity/client'

const cmsClient: SanityClient = sanityClient({
    projectId: '2v8gzwep', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    useCdn: true // `false` if you want to ensure fresh data
})

export default async function articlesHandler(req, res) {
    if (req.method === 'GET') {
        const _articles = await cmsClient.fetch('*[_type == "article"]')
        const multiplied = new Array(50).fill(_articles).flat()
        res.status(200).json(multiplied)
    }
}
