import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { urlFor } from "../../dao/client";
import AuthorReference from "../Authors/AuthorReference";
import CathegoryReference from "../Cathegories/CathegoryReference";
import { visualArt } from "../types";
import { dateDisplaySelection } from "../utils/dateFormatter";
import CardContainer from "./CardContainer";

export default function VisualArtCard({ artwork, withCathegoryReference }: {artwork: visualArt, withCathegoryReference?: boolean}) {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    

    const artworkUrl = `/artworks/${artwork._id}`

    return (
        <CardContainer>
            <Link href={artworkUrl}>
                <a className="h-full relative bg-cover w-full">
                    <div className={` flex flex-col justify-start overflow-hidden duration-300 ${isHovered && "p-1"} `} onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <div className="relative overflow-hidden rounded">
                            <Image
                                width={100}
                                height={100}
                                layout="responsive"
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={urlFor(artwork.image).url()}
                                alt=""
                            />
                            <div className={`${isHovered ? 'absolute' : 'hidden'} inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75`}>
                                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl text-primary">
                                    {artwork.title}
                                </h5>
                                {withCathegoryReference && <CathegoryReference cathegory={"Artes visuales"}/>}
                                <AuthorReference author={artwork.author} />
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </CardContainer>
    )
}