import React from 'react'
import ArticleSectionListItem from '../Article/ArticleSectionListItem';
import AuthorReference from '../Authors/AuthorReference';
import { article } from '../types';

export default function CathegoryArticleItem({ article }: { article: article }) {
    return <ArticleSectionListItem indexInfoComponent={<AuthorReference author={article.author} picture={false} />} article={article}/>
};