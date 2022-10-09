import Image from "next/image";
import { urlFor } from "../../dao/client";
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
            <div className="text-center flex flex-col items-center justify-evenly py-5">
                <h1 className="artwork-title">{artwork?.title}</h1>
                <AuthorReference author={artwork?.author} />
                <CardDate date={artwork?.publishDate} />
            </div>
        </>)
        }
    </div>

}