import { ArticleCard } from "../Cards/ArticleCard";
import LiteraryCard from "../Cards/LiteraryCard";
import VisualArtCard from "../Cards/VisualArtCard";
import { article, visualArt } from "../types";

export default function MixedFeedLayout({ articles, visualArt, reversed = false }: { articles: article[], visualArt: visualArt[], reversed?: boolean }) {
    console.log("props", articles, visualArt)
    const cards = <div >
        <div className="lg:grid lg:gap-4 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {articles.length > 3 && articles.slice(0, 4).map((article, idx) => (
                <div key={idx}>
                    <ArticleCard article={article} />
                </div>
            ))}</div>
    </div>

    const artworkAndLiterary = <div className="flex flex-col justify-start gap-2">
        {Array.isArray(visualArt) && visualArt.length > 0 && <VisualArtCard artwork={visualArt[0]} withCathegoryReference/>}
        <div className="flex flex-col justify-evenly gap-2">
            {articles[4] && (<> <LiteraryCard article={articles[4]} />
                <LiteraryCard article={articles[5]} /></>)}
        </div>
    </div>


    return (<div style={{ paddingBottom: 0 }} className="lg:grid lg:grid-cols-2 lg:gap-4 py-6 px-auto sm:max-w-xl md:max-w-full">
        {reversed ?
            (
                [artworkAndLiterary,
                    cards]
            )
            :
            ([cards,
                artworkAndLiterary])}
    </div>)
}