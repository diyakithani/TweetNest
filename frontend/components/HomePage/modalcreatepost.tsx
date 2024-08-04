import { Modal, Paper, Container, TextInput, Avatar, Group, Button, ActionIcon } from '@mantine/core';
import React from 'react';
import { IconFeather, IconPhoto } from '@tabler/icons-react';
import { useCurrentUser } from '@/utils/hooks';

interface ModalCreatePostProps {
    opened: boolean;
    onClose: () => void;
}



export const ModalCreatePost: React.FC<ModalCreatePostProps> = ({ opened, onClose }) => {
    const myuser = useCurrentUser();
    return (
        <Modal

            opened={opened}
            onClose={onClose}
            centered
            transitionProps={{ transition: 'fade', duration: 200 }}
            size="50vw"
            p="0"
            m="0"


        >
            <Container p="0" m="0" >
                <Paper bg="#add8e6" radius="xl" p="xl" m="0" shadow="sm" w="100%" h="100%" __size='100%'>
                    <Group align="flex-start">
                        <Avatar src={myuser?.pfp_path} alt={myuser?.username} radius="xl" size={60} />
                        <TextInput
                            placeholder={`How was your day, ${myuser?.username}?`}
                            size="xl"
                            style={{ flex: 1 }}
                            radius="xl"
                        />
                    </Group>
                    <Group mt="md" display="flex"  >
                        <ActionIcon variant="outline" color="blue" size="xl">
                            <IconPhoto size={20} />
                        </ActionIcon>
                        <Container p="0" m="0" >
                            <Button color="blue" onClick={() => { }}>Tweet <IconFeather></IconFeather></Button></Container>
                    </Group>
                </Paper>
            </Container>
        </Modal >
    );
};
