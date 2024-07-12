import { Avatar, Container, Paper, Text, TextInput } from '@mantine/core'
import React from 'react'
const user = {
    name: 'Jane Spoonfighter',
    email: 'janspoon@fighter.dev',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

function CreatePost() {
    return (
        <Container mt="md" ml={-5} >
            <Paper bg="lightgray" radius="xl" w="100%" display="flex">
                <Avatar src={user.image} alt={user.name} radius="xl" size={40} m="sm" />
                <Container m="0" >
                    <TextInput label="Create a Post" placeholder="What's on your mind?" size="xl" mb="md" radius="lg" />
                </Container>

            </Paper >
        </Container >
    )
}

export default CreatePost
