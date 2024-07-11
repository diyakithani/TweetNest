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
                {[...Array(100)].map((e, i) => <Tweet />)}



            </Container>

        </div>
    )
}

export default explore
