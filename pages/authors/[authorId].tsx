import React from 'react'
import { useRouter } from 'next/router'
import AuthorArticleList from '../../components/Authors/AuthorArticleList'
import { articlesByAuthor, getArticlesByAuthor } from '../../dao/articles/articlesDAO'
import { getAuthorIds } from '../../dao/authors/authorsDAO'
import { urlFor } from '../../dao/client'
import Image from 'next/image'
import DataLoader from '../../components/DataLoader/DataLoader'
import AuthorProfile from '../../components/Authors/AuthorProfile'

export async function getStaticPaths() {
    const authorIds = (await getAuthorIds()).map(id => ({ params: { authorId: id } }))
    console.log(authorIds)
    return {
        paths: authorIds,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const articlesByAuthor = await getArticlesByAuthor(params.authorId);
    console.log("articleList", articlesByAuthor)
    return {
        props: {
            articlesByAuthor,
        },
    };
}

export default function AuthorFeed({ articlesByAuthor }) {
    const authorId = useRouter().query.authorId as string
    return (
        <DataLoader<articlesByAuthor>
            id='author-articles'
            load={getArticlesByAuthor}
            args={[authorId]}
            options={{ initialData: articlesByAuthor }}
            render={data => data && (
                <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                    <div className="mx-auto px-4">
                        <AuthorProfile author={data.author} />
                    </div>
                    <AuthorArticleList articles={data.articles} />
                </div>
            )
            } />
    )
}