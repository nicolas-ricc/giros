import React from 'react'
import ArticleSectionListItem from '../Article/ArticleSectionListItem';
import CathegoryReference from '../Cathegories/CathegoryReference';
import { article } from '../types';

export default function AuthorArticleItem({article}: {article: article}) {
    return <ArticleSectionListItem indexInfoComponent={<CathegoryReference cathegory={article.cathegory} />} article={article}/>
};