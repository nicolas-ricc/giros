export type article = {
    title: string
    cathegory: string
    content: Record<string, any>[]
    description: string
    publishDate: string
    isHighlightArticle: boolean
    author: author
} & Record<string, any>


export type author = {
    avatar: Record<string,any>
    role: string
    instagram: string
    name: string
    description: string
    _id: string
} & Record<string, any>

export type visualArt = Record<string, any>
export type articlesAndArt = {
    articles: article[],
    art: visualArt[]
}
