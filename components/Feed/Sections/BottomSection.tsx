import React from 'react'
import { FeedSection } from '../Feed'
import MixedFeedLayout from '../MixedFeedLayout'

export default function BottomSection({ articles, visualArt }: FeedSection) {


    return (
    <section>
            <MixedFeedLayout articles={articles} visualArt={visualArt} reversed />
    </section>)

}