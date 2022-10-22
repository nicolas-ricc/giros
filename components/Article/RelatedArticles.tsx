import { getArticlesByCathegory } from "../../data/articles/articlesDAO";
import { ArticleCard } from "../Cards/ArticleCard";
import CardContainer from "../Cards/CardContainer";
import DataLoader from "../DataLoader/DataLoader";
import { article } from "../types";

export default function RelatedArticles({ article }: { article: article }) {

    return (
        <DataLoader id={'related-articles'} load={getArticlesByCathegory} args={[article.cathegory, 6]}
            render={data =>
                <>
                    {data && data.map((art: article, idx: number) =>
                        <div key={idx}>
                            <CardContainer>
                                <ArticleCard article={art} />
                            </CardContainer>
                        </div>
                    )}
                </>
            }
        />
    )
}