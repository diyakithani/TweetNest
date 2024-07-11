import { ExploreHeader } from '@/components/ExplorePage/exploreheader'
import { Navbar } from '@/components/HomePage/navbar'
import { Container } from '@mantine/core'
import React from 'react'

function explore() {
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <ExploreHeader></ExploreHeader>

            </Container>

        </div>
    )
}

export default explore
