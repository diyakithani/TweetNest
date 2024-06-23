import client from '@/utils/httpclient';
import { Button, Container, TextInput, Text } from '@mantine/core'
import React, { use, useState } from 'react'

export default function Server() {
    const [name, setName] = useState("");
    const [response, setResponse] = useState("");

    async function send() {
        const res = await client.get("/test/hello", { params: { name: name } });
        setResponse(res.data);
    }

    return (
        <Container>
            <TextInput value={name} placeholder='Enter Your Name' onChange={(e) => { setName(e.currentTarget.value) }} label="Name" description="Text box to enter name" />
            <Button onClick={() => { send() }}>Submit</Button>
            <Text>{response}</Text>
        </Container>
    )
}
