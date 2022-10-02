import { useRouter } from 'next/router'
import React from 'react'
import Article from '../../components/Article/Article'
import DataLoader from '../../components/DataLoader/DataLoader'
import { getSingleArticle } from '../../dao/articles/articlesDAO'
import {article} from '../../components/types'

export default function SingleArticlePage(){
    const id = useRouter().query.id as string
    return <DataLoader<article> id='unique-article' load={getSingleArticle} args={[id]} render={(data) => <Article article={data}/>} />
}