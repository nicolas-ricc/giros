import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { urlFor } from "../../dao/client";
import AuthorReference from "../Authors/AuthorReference";
import CathegoryReference from "../Cathegories/CathegoryReference";
import { visualArt } from "../types";
import { dateDisplaySelection } from "../utils/dateFormatter";
import CardContainer from "./CardContainer";

export default function VisualArtCard({ artwork }: visualArt) {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    console.log("art", artwork)

    const artworkUrl = `/artworks/${artwork._id}`


    return (
        <CardContainer>
            <div className={` flex flex-col justify-start overflow-hidden duration-300 ${isHovered && "p-1"} `} onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className="min-h-1/6 flex flex-col justify-center items-center w-full">
                    <Link href={artworkUrl} >
                        <a className="link mx-5 mb-2 text-center" onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <h5
                                className={`font-bold inline-block mb-3 lg:text-lg leading-5 ${isHovered ? "text-highlight font-['Montserrat'] text-primary" : "card-title"}`}
                            >
                                {artwork.title}
                            </h5>
                        </a>
                    </Link>
                </div>
                <Link href={artworkUrl}>
                    <a className="h-full py-2 relative bg-cover w-full">
                        <Image
                            className="w-full rounded bg-cover"
                            src={urlFor(artwork.image).url()}
                            alt={artwork.alt}
                            layout="responsive"
                            width={362}
                            height={256}
                        />
                    </a>
                </Link>
                <div className="min-h-1/4 p-3">
                    <div className="text-xs font-semibold tracking-wide uppercase lg:flex lg:flex-row lg:justify-between sm:grid sm:grid-rows-2">
                        <div className="text-xs font-semibold tracking-wide uppercase flex flex-row gap-2 justify-start">
                            <CathegoryReference cathegory={artwork.cathegory} />
                            <span className="text-giros-reading-gray">{dateDisplaySelection.dayAndMonth(artwork.publishDate)}</span>
                        </div>
                        <AuthorReference author={artwork.author} />
                    </div>
                </div>
            </div>
        </CardContainer>
    )
}