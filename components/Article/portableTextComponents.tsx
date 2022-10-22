import React from 'react'
import Image from 'next/image';
import { urlFor } from '../../data/client';
import { PortableTextReactComponents } from '@portabletext/react';

export const portableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => (<div className='m-auto p-2 w-1/2 h-1/2'><Image alt={value.alt} layout="responsive" src={urlFor(value).url()} width={'100%'} height={'100%'} /></div>),
    quote: ({ value }) => (<div className="flex justify-center items-center text-highlight"><p className='w-2/3 article-quote'>{value.text}</p></div>),
    strong: ({value}) => (<strong className="card-title">{value}</strong>)
  },
  marks: {
    strong: ({children}) => (<strong className="article-strong ">{children}</strong>)
  }
}