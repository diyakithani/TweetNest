import React from 'react'
import { Avatar, Center, Text, Group, Box, Paper } from '@mantine/core'
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
    return (
        <div>
            <Center bg="blue">
                <Avatar
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                    size={355}
                    radius="md"
                /> </Center>
            <Text size="lg" ta="center" c="black" bg="blue" fz="h3">BillieBogli123</Text> {/*TODO - how do i increase text size*/}
            <Group bg="blue" mt="md" justify="center" gap={30} mt={0} p="sm">
                {items}
            </Group>
            <Text c="black" ta="left" fz="h4" m="sm" style={{ fontSize: '1em', fontWeight: 'bold', color: 'black' }}>Name: <span style={{ fontSize: '1em', fontWeight: 'bold', color: 'black' }}>Billa Lover</span></Text>

            <Text c="black" ta="left" fz="h4" m="sm">BIO: <Paper radius="xl" p="xl" bg="#D3D3D3">
                <Text>Hi i have a raging god complex and I love to brag about myself,
                    occasionally I like to eat worms.
                </Text>
            </Paper></Text>
            <Text c="black" ta="left" fz="h4" m="sm">Joined:</Text>
            <Text c="black" ta="left" fz="h4" m="sm">Born on:</Text>






        </div >
    )
}

export default Usercard
