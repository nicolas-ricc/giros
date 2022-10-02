import Link from 'next/link'
import React from 'react'
import AuthorReference from '../Authors/AuthorReference'
import CathegoryReference from '../Cathegories/CathegoryReference'
import { dateDisplaySelection } from '../utils/dateFormatter'
import CardContainer from './CardContainer'
import CardDescription from './Components/CardDescription'


export default function LiteraryCard({ article }) {

    const articleUrl = `/articles/${article._id}`

    return (
        <CardContainer>
            <div className="w-full h-full bg-[rgba(255,255,255,0.05)] rounded p-0">
                <div className="bg-giros-card-grey rounded p-5 shadow-feed">
                    <div className=" w-full mb-3 text-xs font-semibold tracking-wide uppercase flex flex-row gap-2 align-baseline justify-between">
                        <CathegoryReference cathegory={article.cathegory} />
                        <span className="text-giros-reading-gray">{dateDisplaySelection.dayAndMonth(article.publishDate)}</span>
                    </div>
                    <div className="flex flex-col justify-between items-start mb-1">
                        <div className="mb-2">

                            <Link href={articleUrl}>
                                <a

                                    aria-label="Article"
                                    className="link flex flex-col"
                                >
                                    <div className="mb-3 inline-block card-title">

                                        <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl link-highlight">
                                            {article.title}
                                        </p>
                                    </div>
                                    <div className="card-text">
                                        <CardDescription description={article.description} />
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <AuthorReference author={article.author} />
                    </div>
                </div>
            </div>
        </CardContainer>
    )
}