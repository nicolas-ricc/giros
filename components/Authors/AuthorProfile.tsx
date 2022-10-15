import Image from "next/image";
import { urlFor } from "../../dao/client";
import CardDescription from "../Cards/Components/CardDescription";
import SocialsList from "../Socials/SocialsList";
import { author } from "../types";

export default function AuthorProfile({ author }: { author: author }) {
    console.log(author)

    return (
        <div className={`${author.description ? "lg:w-2/3" : "lg:w-1/3"} mx-auto bg-[rgba(255,255,255,0.05)] rounded  p-5`}>
            <div className={`h-full flex flex-col justify-start items-center ${author.description && 'lg:flex-row '} lg:justify-evenly lg:items-center gap-x-4 gap-y-4`}>
                {author?.avatar && <div className="lg:w-full flex justify-center items-center"><Image
                    alt={author.avatar.alt}
                    src={urlFor(author.avatar).url()}
                    width={200}
                    height={200}
                    className="object-cover rounded-full shadow-sm"
                /></div>
                }
                <div className={`flex flex-col justify-center items-center lg:w-auto `}>
                    <div className="text-center">
                        <div className="text-highlight card-title">{author.name}</div>
                        <div className="text-highlight">{author.role}</div>
                    </div>
                    {author?.description && <div className="py-4 text-sm"> <CardDescription maxLines={6} description={author.description} /></div>}
                </div>
            </div>
            <div className="text-center text-reading pt-2">
                {author && Array.isArray(author.social_drop) && <SocialsList socials={author} allowedTypes={author.social_drop}/>}
            </div>
            </div>
    )
}