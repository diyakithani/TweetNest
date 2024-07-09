
import React from 'react';
import { Avatar, Center, Text, Group, Box, Paper, Container } from '@mantine/core';
import client from '@/utils/httpclient';

const stats = [
    { value: '34K', label: 'Followers' },
    { value: '187', label: 'Follows' },
    { value: '1.6K', label: 'Posts' },
];
function Usercard() {
    const items = stats.map((stat) => (
        <div key={stat.label}>
            <Text ta="center" fz="lg" fw={500}>
                {stat.value}
            </Text>
            <Text ta="center" fz="sm" lh={1}>
                {stat.label}
            </Text>
        </div>
    ));

    const block = (title: string, value: string) =>
        <Container my="md" display="flex">
            <Text c="black" ta="left" fz="h4" m="sm">{title}</Text>
            <Paper radius="xl" p="lg" bg="#D3D3D3" >{value}</Paper>
        </Container>;

    return (
        <div>
            <Center bg="blue">
                <Avatar
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                    size={355}
                    radius="md"
                /> </Center>
            <Text size="lg" ta="center" c="black" bg="blue" fz="h3">BillieBogli123</Text> {/*TODO - how do i increase text size*/}
            <Group bg="blue" justify="center" gap={30} mt={0} p="sm">
                {items}
            </Group>
            <Text c="black" ta="left" fz="h4" m="sm" style={{ fontSize: '1em', fontWeight: 'bold', color: 'black' }}>Name: <span style={{ fontSize: '1em', fontWeight: 'bold', color: 'black' }}>Billa Lover</span></Text>
            {block("BIO: ", "Hi i have a raging god complex and I love to brag about myself, occasionally I like to eat worms.")}
            {block("Joined: ", "13 September 2023")}
            {block("Born on: ", "10 April 2002")}
        </div >
    );
}

export default Usercard;
