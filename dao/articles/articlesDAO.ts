import { article, articlesAndArt, author } from '../../components/types'
import { cmsClient } from '../client'
import { getVisualArt } from '../visualArt/visualArt'

export const getArticles = async (): Promise<article[]> => {
    const _articles = await cmsClient.fetch('*[_type match "article" && !(_id in path("drafts.**"))] {..., author->} | order(publishDate desc)')
    return _articles
}

export const getSingleArticle = async(id: string): Promise<article> => {
    const _article = await cmsClient.fetch(`*[_id == '${id}'] {..., author->}`)
    return _article[0]
}

export const getArticlesByCathegory = async(cathegory: string): Promise<article[]> => {
    const _articles = await cmsClient.fetch(`*[_type match "article" && cathegory match \"${cathegory}\" && !(_id in path("drafts.**"))] {..., author->} | order(publishDate desc)`)
    return _articles
}

export interface articlesByAuthor {author: author, articles: article[]}

export const getArticlesByAuthor  = async(authorId: string): Promise<articlesByAuthor> => {
    
    const articlesByAuthorQuery = `*[_type match "article" && author._ref match \"${authorId}\" && !(_id in path("drafts.**"))] | order(publishDate desc)`
    const authorDetails = `*[_type match "author" && _id match \"${authorId}\"] | order(publishDate desc)`
    const _articles = await cmsClient.fetch(articlesByAuthorQuery)
    const _author = (await cmsClient.fetch(authorDetails))[0]
    return {author: _author, articles: _articles}
}



export const getArticlesAndArt = async():Promise<articlesAndArt> => {
    const articles = await getArticles();
    const art = await getVisualArt()
    return {articles: articles, art: art}
}