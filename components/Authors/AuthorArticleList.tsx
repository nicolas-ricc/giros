import { article } from "../types"
import AuthorArticleItem from "./AuthorArticleItem"

export default function AuthorArticleList({ articles }: { articles: article[] }) {
    return (
        <>
            {articles.map((article: article, idx: number) => (
                <div key={idx}>
                    <AuthorArticleItem article={article} />
                </div>))}
        </>
    )
}