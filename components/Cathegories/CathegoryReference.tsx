import Link from 'next/link'
import React from 'react'

export default function CathegoryReference({cathegory}:{cathegory: string}){

    return(
        <Link href={`/cathegories/${cathegory}`} ><a
        aria-label="Category"
        title="traveling"
        className='text-reading link '
    >
        <p className="link-highlight">{cathegory}</p>
    </a>
    </Link>

    )
}