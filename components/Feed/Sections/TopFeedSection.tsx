import React from 'react'
import { article, visualArt } from '../../types'
import { FeedSection } from '../Feed'
import MixedFeedLayout from '../MixedFeedLayout'

export default function TopFeedSection({ articles, visualArt }: FeedSection) {
    

    return (<section>
        <MixedFeedLayout articles={articles} visualArt={visualArt} />
    </section>)
}