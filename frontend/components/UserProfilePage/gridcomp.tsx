import { Container, Grid, SimpleGrid, Skeleton, px, rem, Text, Box, Center } from '@mantine/core';
import Usercard from './usercard';
import { withRouter } from 'next/router';

const PRIMARY_COL_HEIGHT = rem(300);

export function GridComp() {
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

    return (
        <Container my="md" >
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xs" >
                <Box h={800} w={450} bg="white" >


                    <Usercard ></Usercard>



                </Box>



                <Grid gutter="md">
                    <Grid.Col>
                        <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
                    </Grid.Col>
                </Grid>
            </SimpleGrid>
        </Container>
    );
}