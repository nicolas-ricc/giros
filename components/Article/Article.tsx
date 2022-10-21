import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { urlFor } from '../../dao/client'
import ArticleAuthorReference from '../Authors/ArticleAuthorReference'
import CardDate from '../Cards/Components/CardDate'
import { socialsTypeRedirectMap } from '../Socials/socialsTypeRedirectMap'
import { dateDisplaySelection } from '../utils/dateFormatter'
import { portableTextComponents } from './portableTextComponents'


export default function Article({ article }) {


    const imgStyle = {
        background: 'cover',
        WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))',
        maskImage: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))',
        height: "45rem"
    } as React.CSSProperties

    const overlay = {
        display: "block",
        left: "50%",
        top: "50%",
        transform: "translate(-70%, -50%)",
        position: "absolute"
    } as React.CSSProperties


    return (
        <article className='flex flex-col justify-center items-center'>
            <div className={`w-full h-{150} flex justify-center align-center mb-5 float-left relative`}>
                <div style={overlay}>
                    <div >
                        <h1 className="article-title">{article.title}</h1>
                    </div>
                </div>
                <div className="w-1/3 h-full mx-auto my-auto bg-transparent">
                </div >
                <div className="w-2/3 h-{150}">
                    <Image style={imgStyle} src={urlFor(article.mainPicture).url()} layout="responsive" objectFit="cover" alt={article.mainPicture.alt} width={'100%'} height={'60%'} priority />
                </div>
            </div>
            <div className="w-full lg:w-2/3 px-4">
                <div className="h-full mx-auto my-auto flex flex-col justify-between gap-2 items-center lg:flex-row lg:justify-between">
                    <CardDate date={dateDisplaySelection.dayAndMonth(article.publishDate)} />
                    <ArticleAuthorReference author={article.author} />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className="py-10">
                        <p className="article-description">{article.description}</p>
                    </div>
                    <div className='h-full mx-auto my-auto article-body'>
                        <PortableText
                            value={article.content}
                            components={portableTextComponents}
                        />
                    </div>
                </div>
            </div>
        </article>
    )
}