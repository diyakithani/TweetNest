import { Avatar, Container, Paper, Text, TextInput } from '@mantine/core'
import { IconSend2 } from '@tabler/icons-react';
import React from 'react'
const user = {
    name: 'Jane Spoonfighter',
    email: 'janspoon@fighter.dev',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

function CreatePost() {
    return (
        <Container mt="md" ml={-5} w="100%" >
            <Paper bg="#add8e6" radius="xl" display="flex" w="100%">

                <Avatar src={user.image} alt={user.name} radius="xl" size={40} m="sm" />
                <TextInput
                    label="Create a Post"
                    placeholder="What's on your mind?"
                    size="xl"
                    mb="md"
                    mr={0}
                    w="30%"
                    radius="lg"
                    mt="5px"



                    styles={{
                        input: {
                            width: "100%",
                            padding: "0px",
                            fontSize: '100%',
                            marginTop: "5px"

                        },
                        label: {
                            margin: '0px',
                            padding: "0px",
                            marginBottom: '5px',
                            width: '100%'
                        }
                    }}
                />
                <IconSend2
                    style={{
                        margin: "0",
                        padding: "0",
                        color: "black",
                        width: "50px",
                        height: "35px",
                        alignItems: "flex-end",
                        cursor: "pointer"






                    }}></IconSend2>




            </Paper >
        </Container >
    )
}

export default CreatePost
