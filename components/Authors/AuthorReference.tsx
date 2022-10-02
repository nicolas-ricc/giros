import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../dao/client'

export default function AuthorReference({ author }) {
    return (
        <Link href={`/authors/${author._id}`}>
            <a aria-label="Author" title="Author">
                <div className="flex items-center link">
                    {author?.avatar &&
                        <Image
                            src={urlFor(author.avatar).url()}
                            width={40}
                            height={40}
                            alt="avatar"
                            className="object-cover w-10 h-10 rounded-full shadow-sm mr-3"
                        />
                    }
                    <div className={`font-semibold px-2 ${!author.avatar &&  'pl-0'} link-highlight`}>
                        {author?.name}
                    </div>
                </div>
            </a>
        </Link>
    )
}