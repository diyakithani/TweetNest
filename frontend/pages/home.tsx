import Tweet from '@/components/HomePage/Tweet'
import { Navbar } from '@/components/HomePage/navbar'
import React from 'react'

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Tweet></Tweet>
            {[...Array(100)].map((e, i) => <Tweet />)}


        </div>
    )
}
