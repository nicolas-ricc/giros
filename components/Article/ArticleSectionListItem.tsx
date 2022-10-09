import Link from 'next/link'
import React from 'react'
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
        <div className="my-5 px-10 border-t divide-y">
            <div className="grid py-4 grid-cols-6 gap-4 justify-start">
                <div className='col-span-2'>
                    <div className="space-y-1 text-xs font-semibold  uppercase">
                        <>{indexInfoComponent}</>
                        <p className="text-giros-reading-gray">{dateDisplaySelection.dayAndMonth(new Date(article.publishDate))}</p>
                    </div>
                </div>
                <div className="col-span-4">
                    <Link href={articleUrl}>
                        <a className="link">
                            <div className="mb-3">
                                <p className="card-title text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl link-highlight">
                                    {article.title}
                                </p>
                            </div>
                            <CardDescription description={article.description} />
                        </a>
                    </Link>
                </div>
            </div>
        </div>

    )
}