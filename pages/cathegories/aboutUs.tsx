import React from 'react'
import DataLoader from '../../components/DataLoader/DataLoader'
import { getAboutUs } from '../../data/statics/staticsDAO'
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '../../components/Article/portableTextComponents'
import { getAuthorsSample } from '../../data/authors/authorsDAO'
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../../data/client'


export default function AboutUs() {
    return (
        <>
            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-24 lg:py-10">

                <DataLoader<any>
                    id='about-us'
                    load={getAboutUs}
                    render={data => data && (
          
                            <div className='h-full mx-auto my-auto article-body text-justify'>

                                <PortableText
                                    value={data}
                                    components={portableTextComponents}
                                />
                            </div>

                    )
                    } />

                <DataLoader<any>
                    id='authors-extended'
                    load={() => getAuthorsSample(20)}
                    render={authors => authors && (
                        <div className='flex flex-col justify-center items-center'>
                        <div className="py-10">
                            <p className="article-description">Algunos de nosotros</p>
                            </div>
                        <div className={`grid grid-cols-2 md:grid-cols-2 grid-rows-auto lg:grid-cols-${authors.length <= 4 ? authors.length : 4} justify-evenly mx-auto lg:max-w-screen-lg`}>

                            {authors.map((author, idx) => (
                                <Link key={idx} href={`/authors/${author._id}`}>
                                    <a className="flex flex-col items-center justify-around px-2 py-4 link">
                                        <div>
                                            {author.avatar && <Image
                                                className="object-cover w-10 h-10 lg:w-20 lg:h-20 mb-2 rounded-full"
                                                width={80}
                                                height={80}
                                                src={urlFor(author.avatar)?.url()}
                                                alt={author.name}
                                            />}
                                        </div>
                                        <div className="flex flex-col items-center text-center">
                                            <p className="text-lg font-bold card-text link-highlight">{author.name}</p>
                                        </div>
                                    </a>
                                </Link>
                            ))}
                        </div>
                        </div>

                    )
                    } />
            </div>

        </>
    )
}