import { Blockquote, Container, Button } from '@mantine/core'
import React from 'react'
import axios from 'axios';

export default function CatFacts() {
    const [quote, setQuote] = React.useState("Click the button to generate random cat facts");
    async function generate_facts() {
        const response = await axios.get("https://meowfacts.herokuapp.com/");
        console.log(response);
        setQuote(response.data.data[0]);
    }
    return (
        <Container>
            <Blockquote>
                {quote}
            </Blockquote>
            <Button onClick={generate_facts} >Generate!</Button>
        </Container>
    )
}
