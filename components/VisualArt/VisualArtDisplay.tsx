import Image from "next/image";
import { urlFor } from "../../data/client";
import ArticleAuthorReference from "../Authors/ArticleAuthorReference";
import AuthorReference from "../Authors/AuthorReference";
import CardDate from "../Cards/Components/CardDate";
import { visualArt } from "../types";

export default function VisualArtDisplay({ artwork }: { artwork: visualArt }) {



    return <div className="w-full h-full p-5 lg:p-20">
        {artwork && (<>
            <Image
                layout="responsive"
                alt={artwork.title}
                width={100}
                height={100}
                src={urlFor(artwork?.image).url()}
            />
            <div className="text-center flex flex-col gap-2 items-center justify-evenly py-5">
                <CardDate date={artwork?.publishDate} />
                <h1 className="artwork-title">{artwork?.title}</h1>
                <ArticleAuthorReference author={artwork?.author} />
            </div>
        </>)
        }
    </div>

}