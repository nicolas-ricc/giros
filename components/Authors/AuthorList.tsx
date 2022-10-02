import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { urlFor } from '../../dao/client';
import { author } from '../types';

export default function AuthorList({ authors }: { authors: any }) {


    console.log("authors", authors)
    return (
        <div className="flex flex-col my-10">
            <div className="mx-auto mb-10 sm:text-center">
                <p className="text-lg card-title inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    Nosotros
                </p>
                <p className="card-text text-base text-gray-700 md:text-lg">
                    Texto de presentación de los autores
                </p>
            </div>
            <div className={`grid sm:grid-cols-2 md:grid-cols-2 grid-rows-auto lg:grid-cols-${authors.withPicture.length <= 4 ? authors.withPicture.length : 4} grid-row-auto justify-evenly mx-auto lg:max-w-screen-lg`}>
                {authors.withPicture.map((author: author, idx: number) => (
                    <Link key={idx} href={`/authors/${author._id}`}>
                        <a className="flex flex-col items-center justify-between px-2 link">
                            <div>
                                {author.avatar && <Image
                                    className="object-cover w-20 h-20 mb-2 rounded-full"
                                    width={80}
                                    height={80}
                                    src={urlFor(author.avatar)?.url()}
                                    alt="Person"
                                />}
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-lg font-bold card-text link-highlight">{author.name}</p>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </div >
    )

};