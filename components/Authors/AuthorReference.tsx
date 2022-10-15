import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../dao/client'
import { author } from '../types'

export default function AuthorReference({ author, picture = true }: {author: author, picture?: boolean}) {
    return (
        <Link href={`/authors/${author._id}`}>
            <a aria-label="Author" title="Author">
                <div className="flex items-center link">
                    {author?.avatar && picture &&
                        <Image
                            src={urlFor(author.avatar).url()}
                            width={40}
                            height={40}
                            alt="avatar"
                            className="object-cover w-10 h-10 rounded-full shadow-sm mr-3"
                        />
                    }
                    <div><p className={`leading-none font-semibold ${picture && author.avatar &&  'px-2'} text-highlight link-highlight`}>
                        {author?.name}
                    </p>
                    </div>
                </div>
            </a>
        </Link>
    )
}