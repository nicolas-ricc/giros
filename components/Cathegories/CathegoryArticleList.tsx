import { article } from "../types"
import CathegoryArticleItem from "./CathegoryArticleItem"

export default function CathegoryArticleList({ articles }: { articles: article[] }) {
    return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                    <div className="text-highlight text-5xl font-bold lg:mx-16 lg:pb-4">
                    <h2>{articles[0]?.cathegory}</h2>
        </div>

            {articles.map((article: article, idx: number) => (
                <div key={idx}>
                    <CathegoryArticleItem article={article} />
                </div>)
            )}
        </div>
    )
}