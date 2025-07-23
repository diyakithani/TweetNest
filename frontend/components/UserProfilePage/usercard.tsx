import React from 'react';
import { Avatar, Center, Text, Group, Container, Paper } from '@mantine/core';
import { GiNewBorn } from "react-icons/gi";
import { FcDocument, FcLink, FcRules, FcSms } from "react-icons/fc";
import { useCurrentUser } from '@/utils/hooks';
import { stringToAlpha } from '@tsparticles/engine';


const stats = [
    { value: {}, label: 'Followers' },
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
    const block = (title: string, value: string, IconComponent: React.ElementType) => (
        <Container my="xl" display="flex" p={8} pl={0} >
            <IconComponent style={{ margin: '11px', flexShrink: 0 }} size={35} /> {/* Render the icon inline */}
            <Text c="black" ta="left" fz="h4" m="sm" ml={0}>{title}</Text>
            <Paper radius="xl" p="lg" bg="#d5d5d5" mb="sm">{value}</Paper>
        </Container>
    );
    const myuser = useCurrentUser();

    return (
        <div style={{ backgroundColor: "#f2f2f2" }}>
            <Center bg="blue">
                <Avatar
                    src={myuser?.pfp_path}
                    size={355}
                    radius="md"
                />
            </Center>
            <Text size="lg" ta="center" c="black" bg="blue" fz="h3">{myuser?.username}</Text>
            <Group bg="blue" justify="center" gap={30} mt={0} p="sm">
                {items}
            </Group>
            <Text c="black" ta="left" fz="h4" m="sm" style={{ fontSize: '1em', fontWeight: 'bold', color: 'black' }}>Name: <span style={{ fontSize: '1em', fontWeight: 'bold', color: 'black' }}>Billa Lover</span></Text>
            {block("BIO: ", "Hi I have a raging god complex and I love to brag about myself. Occasionally, I like to eat worms.", FcRules)}
            {block("Joined: ", "13 September 2023", FcLink)}
            {block("Born on: ", myuser?.birthday ?? "", GiNewBorn)}
        </div>
    );
}

export default Usercard;
;
