import Link from 'next/link'
import React from 'react'
import { cathegoryMap } from './cathegoryMap'

export default function CathegoryReference({cathegory}:{cathegory: string}){
    const mapped = cathegoryMap(cathegory)
    return(
        <Link href={`/cathegories/${mapped.url}`} ><a
        aria-label="Category"
        title="traveling"
        className='text-reading link '
    >
        <p className="link-highlight text-xs font-semibold ">{mapped.title.toUpperCase()}</p>
    </a>
    </Link>

    )
}