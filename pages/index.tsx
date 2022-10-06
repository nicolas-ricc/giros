import { dehydrate, QueryClient } from 'react-query'
import Feed from '../components/Feed/Feed'
import { getArticles, getArticlesAndArt } from '../dao/articles/articlesDAO'
import DataLoader from '../components/DataLoader/DataLoader'
import { articlesAndArt } from '../components/types'
import { getContactsAndSocials } from '../dao/statics/staticsDAO'
import { getVisualArt } from '../dao/visualArt/visualArt'

export async function getStaticProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('articles-query', getArticlesAndArt)
  return {
    props: { dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))) },
    revalidate: 60
  }
}
export default function Home({dehydratedState}) {
  const staticData = dehydratedState?.queries?.find(query => query.queryKey === 'articles-query')?.state?.data
  return <DataLoader<articlesAndArt> id='articles-query' load={getArticlesAndArt} options={{ initialData: staticData }} render={(data) => {
    return <Feed content={data} />
  }} />
}
