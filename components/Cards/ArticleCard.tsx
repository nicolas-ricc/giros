import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { urlFor } from '../../dao/client';
import AuthorReference from '../Authors/AuthorReference';
import CathegoryReference from '../Cathegories/CathegoryReference';
import { dateDisplaySelection } from '../utils/dateFormatter'
import CardContainer from './CardContainer';
import CardDate from './Components/CardDate';
import CardDescription from './Components/CardDescription';

export const ArticleCard = ({ article }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)

    const articleUrl = `/articles/${article._id}`
    console.log("date article", article?.publishDate)

    return (
        <CardContainer>
            <div className="overflow-hidden bg-transparent rounded shadow-feed">
                {article.mainPicture &&
                    <Link href={articleUrl}>
                        <a onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <Image
                                className="object-cover w-full rounded sm:h-96"
                                src={urlFor(article.mainPicture).url()}
                                alt={article.mainPicture.alt}
                                layout="responsive"
                                width={362}
                                height={256}
                            />
                        </a>
                    </Link>
                }

                <div className="px-2 md:px-2 lg:px-5 pt-5 overflow-y-hidden">
                    <div className="h-full flex flex-col justify-between items-left mb-1 pb-2">
                        <div className="mb-3 flex flex-row gap-2 align-baseline justify-between">
                            <CathegoryReference cathegory={article.cathegory} />
                            <CardDate date={article.publishDate}/>
                        </div>
                        <Link href={articleUrl}>
                            <a className="link">
                                <h5
                                    className={`${isHovered ? "text-highlight font-['Montserrat'] font-bold text-primary" : "card-title"} inline-block mb-3 lg:text-2xl leading-5 link-highlight`}
                                >
                                    {article.title}
                                </h5>
                                <div className="mb-2">
                                    <CardDescription description={article.description} />
                                </div>
                            </a>
                        </Link>
                        <AuthorReference author={article.author} />
                    </div>
                </div>
            </div>
        </CardContainer>
    );
};