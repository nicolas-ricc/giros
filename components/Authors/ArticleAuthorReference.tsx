import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../dao/client'
import { author } from '../types'

export default function ArticleAuthorReference({ author }: { author: author }) {
    return (
        <Link href={`/authors/${author._id}`}>
            <a aria-label="Article-Author">
                <div className="flex w-full  link">
                    {author?.avatar && <Image
                        alt={author.avatar.alt}
                        src={urlFor(author.avatar).url()}
                        width={50}
                        height={50}
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                    />
                    }
                    <div className="flex flex-col justify-center items-around px-4">
                        <div
                            aria-label="Author"
                            className="font-semibold text-highlight link-highlight"
                        >
                            {author?.name}
                        </div>
                        <p className="text-sm font-medium leading-4 text-highlight">{author.role}</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}