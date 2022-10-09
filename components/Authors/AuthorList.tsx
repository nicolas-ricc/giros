import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { urlFor } from '../../dao/client';
import { author } from '../types';

export default function AuthorList({ authors }: { authors: any }) {


    
    return (
        <div className="flex flex-col my-10">
            <div className="mx-auto mb-10 flex flex-col items-center text-center">
                <p className="text-lg card-title inline-block px-3 py-px mb-4 text-xs font-semibold r text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    Nosotros
                </p>
                <p className="card-text text-base text-gray-700 md:text-lg">
                    Texto de presentación de los autores
                </p>
            </div>
            <div className={`grid grid-cols-2 md:grid-cols-2 grid-rows-auto lg:grid-cols-${authors.length <= 4 ? authors.length : 4} justify-evenly mx-auto lg:max-w-screen-lg`}>
                {authors.map((author: author, idx: number) => (
                    <Link key={idx} href={`/authors/${author._id}`}>
                        <a className="flex flex-col items-center justify-around p-2 link">
                            <div>
                                {author.avatar && <Image
                                    className="object-cover w-10 h-10 lg:w-20 lg:h-20 mb-2 rounded-full"
                                    width={80}
                                    height={80}
                                    src={urlFor(author.avatar)?.url()}
                                    alt="Person"
                                />}
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <p className="text-lg font-bold card-text link-highlight">{author.name}</p>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </div >
    )

};