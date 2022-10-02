import { author } from '../../components/types'
import { cmsClient } from '../client'

export const getAuthors = async ():Promise<author[]> => {
    const _authors = await cmsClient.fetch('*[_type == "author" && !(_id in path("drafts.**"))] | order(_createdAt desc)')
    const authors = _authors.reduce((prev, curr) => 
    {
        const obj = prev
        //obj[curr.role] = obj[curr.role] ? obj[curr.role].concat(curr) : [curr]
        curr.avatar ? obj['withPicture'].push(curr) : obj['noPicture'].push(curr)
        return obj 
    }, {
        withPicture: [],
        noPicture:[]
    })
    return authors
}

export const getAuthorIds = async () => {
    const _authorIds = await cmsClient.fetch('*[_type == "author" && !(_id in path("drafts.**"))]{_id} | order(_createdAt desc)')
    return _authorIds.map((obj) => obj._id)
}