import { dehydrate, QueryClient } from 'react-query'
import Feed from '../components/Feed/Feed'
import { getArticlesAndArt } from '../data/articles/articlesDAO'
import DataLoader from '../components/DataLoader/DataLoader'
import { articlesAndArt } from '../components/types'
import { getAuthorsSample } from '../data/authors/authorsDAO'
import { getAboutUs } from '../data/statics/staticsDAO'

export async function getStaticProps() {
  const queryClient = new QueryClient()
  await Promise.all(
    [await queryClient.prefetchQuery('articles-query', getArticlesAndArt),
    await queryClient.prefetchQuery('authors-sample', () => getAuthorsSample(8))]
  )
  return {
    props: { dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))) },
    revalidate: 60
  }
}

export default function Home({ dehydratedState }) {
  console.log(dehydratedState?.queries)
  const staticArticlesData = dehydratedState?.queries?.find(query => query.queryKey === 'articles-query')?.state?.data
  const staticAuthorsData = dehydratedState?.queries?.find(query => query.queryKey === 'authors-sample')?.state?.data
  return <DataLoader<articlesAndArt> id='articles-query' load={getArticlesAndArt} options={{ initialData: staticArticlesData }} render={(data) => {
    return <Feed content={data} authors={staticAuthorsData} />
  }} />
}
