/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { getArticlesAndArt } from '../../dao/articles/articlesDAO'
import DataLoader from '../DataLoader/DataLoader'
import { article, articlesAndArt, author, visualArt } from '../types'
import BottomSection from './Sections/BottomSection'
import EndSection from './Sections/EndSection'
import { feedSectionConfig } from './Sections/feedSectionConfig'
import MiddleFeedSection from './Sections/MiddleFeedSection'
import TopFeedSection from './Sections/TopFeedSection'

export type FeedSection = {
  articles: article[]
  visualArt: visualArt[]
}
export default function Feed({ content, authors }: { content: articlesAndArt, authors: author[] }) {
  console.log(authors)
  const topContent = {
    articles: {
      start: 0,
      end: feedSectionConfig.top.articles
    },
    art: {
      start: 0,
      end: feedSectionConfig.top.visualArt
    }
  }

  const middleContent = {
    articles: {
      start: topContent.articles.end,
      end: topContent.articles.end + feedSectionConfig.middle.articles
    },
    art: {
      start: topContent.art.end,
      end: topContent.art.end + feedSectionConfig.middle.visualArt
    }
  }

  const bottomContent = {
    articles: {
      start: middleContent.articles.end,
      end: middleContent.articles.end + feedSectionConfig.bottom.articles
    },
    art: {
      start: middleContent.art.end,
      end: middleContent.art.end + feedSectionConfig.bottom.visualArt
    }
  }
  return (
    <section className="feed">
      <DataLoader load={getArticlesAndArt} id="articles-query"
        options={{ initialData: content }}
        render={content => {
          const articles = content.articles
          const art = content.art
          return (
            <>
              <TopFeedSection articles={articles.slice(topContent.articles.start, topContent.articles.end)} visualArt={art.slice(topContent.art.start, topContent.art.end)} />
              <MiddleFeedSection articles={articles.slice(middleContent.articles.start, middleContent.articles.end)} visualArt={art.slice(middleContent.art.start, middleContent.art.end)} />
              <BottomSection articles={articles.slice(bottomContent.articles.start, bottomContent.articles.end)} visualArt={art.slice(bottomContent.art.start, bottomContent.art.end)} />
            </>
          )
        }} />
      <EndSection authors={authors} />
    </section>)
}