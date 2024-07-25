import { ExploreHeader } from '@/components/ExplorePage/exploreheader'
import { Navbar } from '@/components/HomePage/navbar'
import Tweet from '@/components/HomePage/Tweet'
import { Container } from '@mantine/core'
import React from 'react'

function explore() {
    return (
        <div>
            <Navbar></Navbar>
            <Container bg="lightgray" >
                <ExploreHeader></ExploreHeader>
                {[...Array(100)].map((e, i) => <Tweet post={{
                    content: "explore",
                    post_id: 0,
                    parent_post_id: i - 1,
                    media_path: "hehechan.jpg",
                    timestamp: new Date(),
                    user_id: 0
                }} />)}
            </Container>

        </div>
    )
}

export default explore
