import { Blockquote, Container, Button } from '@mantine/core'
import React from 'react'

export default function CatFacts() {
    const [quote, setQuote] = React.useState("Click the button to generate random cat facts");
    return (
        <Container>
            <Blockquote>
                {quote}
            </Blockquote>
            <Button >Generate!</Button>
        </Container>
    )
}
