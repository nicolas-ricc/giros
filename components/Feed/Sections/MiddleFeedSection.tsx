import React from 'react'
import { ArticleCard } from '../../Cards/ArticleCard'
import LiteraryCard from '../../Cards/LiteraryCard'
import { article } from '../../types'
import { FeedSection } from '../Feed'

export default function MiddleFeedSection({ articles, visualArt }: FeedSection) {

    return (

        <section className="py-6 px-auto sm:max-w-xl md:max-w-full">
            <div className="lg:grid lg:gap-3 lg:grid-cols-4 sm:max-w-sm sm:mx-auto md:max-w-full ">
                {articles.length > 0 && articles.slice(0, 4).map((article, idx) => (
                    <div key={idx}>
                        <ArticleCard article={article} />
                    </div>
                ))}
            </div>
            <div className="lg:grid lg:grid-cols-2 sm:flex sm:flex-col gap-3 sm:max-w-sm sm:mx-auto md:max-w-full">
                {articles.length > 4 && articles.slice(4, 8).map((article, idx) =>
                    <div key={idx}>
                        <LiteraryCard article={article} />
                    </div>
                )}
            </div>
        </section>
    )

}