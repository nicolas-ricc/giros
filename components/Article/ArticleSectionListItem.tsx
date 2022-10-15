import Link from 'next/link'
import React from 'react'
import CardDate from '../Cards/Components/CardDate'
import CardDescription from '../Cards/Components/CardDescription'
import { article } from '../types'
import { dateDisplaySelection } from '../utils/dateFormatter'

interface ArticleSectionList {
    indexInfoComponent: JSX.Element
    article: article
}

export default function ArticleSectionListItem({ indexInfoComponent, article }: ArticleSectionList) {

    const articleUrl = `/articles/${article._id}`

    return (
        <div className="lg:mx-16 divide-y">
            <div className="my-5 py-4 flex flex-col justify-evenly lg:grid lg:grid-rows-1 lg:grid-cols-6 gap-4 justify-start border-t">
                <div>
                    <div className="flex flex-col justify-start items-start gap-2 text-xs font-semibold  uppercase">
                        <>{indexInfoComponent}</>
                        <CardDate date={article.publishDate}/>
                    </div>
                </div>
                <div className="lg:row-span-1 lg:col-span-5 content-start">
                    <Link href={articleUrl}>
                        <a className="link">
                            <div className="mb-3">
                                <p className="card-title text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl link-highlight">
                                    {article.title}
                                </p>
                            </div>
                            <CardDescription description={article.description} maxLines={6} />
                        </a>
                    </Link>
                </div>
            </div>
        </div>

    )
}