import { author } from '../../components/types'
import { cmsClient } from '../client'

export const getAuthors = async (): Promise<author[]> => {
    const authors = await cmsClient.fetch('*[_type == "author" && !(_id in path("drafts.**"))] | order(_createdAt desc)')
    return authors
}

export const getAuthorIds = async (): Promise<number[]> => {
    const _authorIds = await cmsClient.fetch('*[_type == "author" && !(_id in path("drafts.**"))]{_id} | order(_createdAt desc)')
    return _authorIds.map((obj: author) => obj._id)
}

export const getAuthorsSample = async (amount: number): Promise<author[]> => {
    const authorsWithPic: author[] = await cmsClient.fetch('*[_type == "author" && defined(avatar) && !(_id in path("drafts.**"))] | order(_createdAt desc)')
    const actualAmount: number = authorsWithPic.length >= amount ? amount : authorsWithPic.length
    const startIndex: number = Math.floor(Math.random() * (authorsWithPic.length - actualAmount))
    const endIndex: number = startIndex + actualAmount
    const sample: author[] = authorsWithPic.slice(startIndex, endIndex)
    const randomized: author[] = sample.map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    return randomized
} 