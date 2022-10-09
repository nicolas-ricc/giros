import { article } from "../types"
import CathegoryArticleItem from "./CathegoryArticleItem"

export default function CathegoryArticleList({ articles }: { articles: article[] }) {
    return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
            {articles.map((article: article, idx: number) => (
                <div key={idx}>
                    <CathegoryArticleItem article={article} />
                </div>)
            )}
        </div>
    )
}