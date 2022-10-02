import Image from "next/image";
import { urlFor } from "../../dao/client";
import CardDescription from "../Cards/Components/CardDescription";
import { author } from "../types";

export default function AuthorProfile({ author }: { author: author }) {

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-3 justify-center items-center gap-4  place-content-center">
                {author?.avatar && <div className="justify-self-center"><Image
                    alt={author.avatar.alt}
                    src={urlFor(author.avatar).url()}
                    width={200}
                    height={200}
                    className="object-cover rounded-full shadow-sm "
                /></div>
                }
                <div className={`flex flex-col justify-center items-center ${author?.avatar ? 'w-auto col-span-2' : 'col-span-3' }`}>
                    <div className="text-highlight card-title">{author.name}</div>
                    <div className="text-highlight">{author.role}</div>
                    <span className="w-2/3"> <CardDescription description={author.description || new Array(999).fill("aaaaaaa ").join('')}/></span>
                </div>

            </div>
        </div>
    )
}