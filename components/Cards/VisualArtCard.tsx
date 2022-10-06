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
                <Link href={artworkUrl}>
                    <a className="h-full relative bg-cover w-full">
                        <div className="min-h-1/6 flex flex-col justify-center items-center w-full">

                            <h5
                                className={`font-bold inline-block mb-3 lg:text-lg leading-5 ${isHovered ? "text-highlight font-['Montserrat'] text-primary" : "card-title"}`}
                            >
                                {artwork.title}
                            </h5>
                        </div>
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
                <div className="text-xs font-semibold tracking-wide uppercase flex flex-col items-center py-2">
                    <CathegoryReference cathegory={"Artes visuales"} />
                    <span className="text-giros-reading-gray">{dateDisplaySelection.dayAndMonth(artwork.publishDate)}</span>
                    <div className="py-2">
                        <AuthorReference author={artwork.author} />
                    </div>
                </div>
            </div>
        </CardContainer>
    )
}