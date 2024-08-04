import { ExploreHeader } from '@/components/ExplorePage/exploreheader'
import { Navbar } from '@/components/HomePage/navbar'
import Tweet from '@/components/HomePage/Tweet'
import { useGetPosts } from '@/utils/hooks'
import { Container } from '@mantine/core'
import React from 'react'

function explore() {
    const { posts, loading, error } = useGetPosts();
    return (
        <div>
            <Navbar></Navbar>
            <Container bg="lightgray" >
                <ExploreHeader></ExploreHeader>
                {posts.map((post) => <Tweet post={post}></Tweet>)}
            </Container>

        </div>
    )
}

export default explore
