import React from 'react'
import { getArticlesByCathegory } from '../../dao/articles/articlesDAO'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import CathegoryArticleList from '../../components/Cathegories/CathegoryArticleList'
import DataLoader from '../../components/DataLoader/DataLoader'
import {article} from '../../components/types'

export default function CathegoryFeed() {
    const cathegory = useRouter().query.cathegory as string
    return (
     <DataLoader<article[]> 
     id='unique-article' 
     load={getArticlesByCathegory} 
     args={[cathegory]} 
     render={(data) => data && <>
        <CathegoryArticleList articles={data} />
    </>}/>)
}