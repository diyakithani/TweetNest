import { Avatar, Container, Paper, Text, Button, Group } from '@mantine/core';
import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { ModalCreatePost } from './modalcreatepost';
import { useCurrentUser } from '@/utils/hooks';

const user = {
    name: 'Jane Spoonfighter',
    email: 'janspoon@fighter.dev',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

const CreatePost: React.FC = () => {
    const myuser = useCurrentUser();
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <Container mt="md" w="100%">
            <Paper p="md" radius="xl" shadow="sm" bg="#add8e6">
                <Group display="flex-row" align="center" >
                    <Avatar src={user.image} alt={user.name} radius="xl" size="10%" />
                    <Text size="xl" style={{ flex: 1, textAlign: 'center', fontFamily: "monospace", fontWeight: "bolder" }}>{myuser?.username}, What's on your mind?</Text>
                    <Button color="blue" onClick={open}>Tweet it out!</Button>
                </Group>
                <ModalCreatePost opened={opened} onClose={close} />
            </Paper>
        </Container>
    );
};

export default CreatePost;

