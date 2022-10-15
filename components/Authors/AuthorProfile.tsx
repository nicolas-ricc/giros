import Image from "next/image";
import { urlFor } from "../../dao/client";
import CardDescription from "../Cards/Components/CardDescription";
import { author } from "../types";

export default function AuthorProfile({ author }: { author: author }) {

    return (
        <div className="flex justify-center">
            <div className=" h-full grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 lg:justify-center lg:items-center gap-x-4 p-5 w-2/3   bg-[rgba(255,255,255,0.05)] rounded">
                {author?.avatar && <div className="lg:w-full flex justify-center items-center"><Image
                    alt={author.avatar.alt}
                    src={urlFor(author.avatar).url()}
                    width={200}
                    height={200}
                    className="object-cover rounded-full shadow-sm"
                /></div>
                }
                <div className={`flex flex-col justify-center items-center ${author?.avatar ? 'row-span-2 lg:w-auto lg:col-span-2' : 'row-span-3 lg:col-span-3'}`}>
                    <div className="text-center">
                        <div className="text-highlight card-title">{author.name}</div>
                        <div className="text-highlight">{author.role}</div>
                    </div>
                    <div> <CardDescription description={author.description || new Array(20).fill("aaaaaaa ").join('')} /></div>
                </div>

            </div>
        </div>
    )
}