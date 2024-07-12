import Tweet from '@/components/HomePage/Tweet'
import CreatePost from '@/components/HomePage/createpost'
import { Navbar } from '@/components/HomePage/navbar'
import { Container } from '@mantine/core'
import React from 'react'

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <CreatePost></CreatePost>
                <Tweet></Tweet>
                {[...Array(100)].map((e, i) => <Tweet />)}
            </Container>


        </div >
    )
}
