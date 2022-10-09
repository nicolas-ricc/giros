import {visualArt } from '../../components/types'
import { cmsClient } from '../client'

export const getVisualArt = async (): Promise<visualArt[]> => {
    const art  = await cmsClient.fetch('*[_type match "visualArt" && !(_id in path("drafts.**"))] {..., author->} | order(_createdAt desc)')
    console.log("art", art)
    return art
}

export const getSingleVisualArtPiece = async (id: number): Promise<visualArt> => {
    const art  = await cmsClient.fetch(`*[_type match "visualArt" && _id == "${id}" && !(_id in path("drafts.**"))] {..., author->} | order(_createdAt desc)`)
    return art[0]
}
