import React from 'react'
import { useRouter } from 'next/router'
import AuthorArticleList from '../../components/Authors/AuthorArticleList'
import { articlesByAuthor, getArticlesByAuthor } from '../../data/articles/articlesDAO'
import { getAuthorIds } from '../../data/authors/authorsDAO'
import DataLoader from '../../components/DataLoader/DataLoader'
import AuthorProfile from '../../components/Authors/AuthorProfile'

export async function getStaticPaths() {
    const authorIds = (await getAuthorIds()).map(id => ({ params: { authorId: id } }))
    
    return {
        paths: authorIds,
        fallback: false,
    }
}

export default function AuthorFeed() {
    const authorId = useRouter().query.authorId as string
    console.log("DEBUGGING - authorId", authorId)
    return (
        <DataLoader<articlesByAuthor>
            id='author-articles'
            load={getArticlesByAuthor}
            args={[authorId]}
            render={data => {
                console.log("DEBUGGING - data", data)
                return (
                <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                    <AuthorProfile author={data.author} />
                    <AuthorArticleList articles={data.articles} />
                </div>
            )}
            } />
    )
}