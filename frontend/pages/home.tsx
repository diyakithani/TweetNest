import Tweet from '@/components/HomePage/Tweet'
import CreatePost from '@/components/HomePage/createpost'
import { Navbar } from '@/components/HomePage/navbar'
import { useGetPosts } from '@/utils/hooks'
import { Container } from '@mantine/core'
import React from 'react'

export default function Home() {
    const posts = useGetPosts();

    return (
        <div style={{ backgroundColor: "#f2f2f2" }}>
            <Navbar></Navbar>
            <Container>
                <CreatePost></CreatePost>
                {posts.map((post) => <Tweet post={post}></Tweet>)}
            </Container>


        </div >
    )
}
