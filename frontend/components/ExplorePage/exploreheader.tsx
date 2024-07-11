import {
    Container,
    Text,
    Tabs,
    useMantineTheme,
    Paper,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import classes from './exploreheader.module.css';

const user = {
    name: 'Jane Spoonfighter',
    email: 'janspoon@fighter.dev',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

const tabs = [
    'Trending',
    'Music',
    'Sports',
    'Technology',
    'Fashion',
    'Travel',
    'Food',
    'Health',
    'Movies & TV',
    'Gaming',
    'Art',
    'Science',
    'Books',
    'DIY',
    'Crafts',
    'Photography'
];

export function ExploreHeader() {
    const items = tabs.map((tab) => (
        <Paper radius="xl" key={tab} className={classes.tabPaper}>
            <Tabs.Tab value={tab}>
                {tab}
            </Tabs.Tab>
        </Paper>
    ));

    return (
        <div className={classes.header}>
            <Container size="xl" className={classes.container}>
                <Text className={classes.exploreText}>WHAT ARE YOU INTERESTED IN?</Text>
                <Tabs
                    defaultValue="Trending"
                    variant="pills"
                    visibleFrom="sm"
                    classNames={{
                        root: classes.tabs,
                        list: classes.tabsList,
                        tab: classes.tab,
                    }}
                >
                    <Tabs.List>{items}</Tabs.List>
                </Tabs>
            </Container>
        </div>
    );
}
