import cx from 'clsx';
import { useState } from 'react';
import {
    Container,
    Avatar,
    UnstyledButton,
    Group,
    Text,
    Menu,
    Tabs,
    Burger,
    rem,
    useMantineTheme,
    Button,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconLogout,
    IconHeart,
    IconStar,
    IconMessage,
    IconSettings,
    IconPlayerPause,
    IconTrash,
    IconSwitchHorizontal,
    IconChevronDown,
    IconFeather,
    IconMessageCircle,
    IconPhoto
} from '@tabler/icons-react';
import classes from './navbar.module.css';
import Tweet from './Tweet';

const user = {
    name: 'Jane Spoonfighter',
    email: 'janspoon@fighter.dev',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

const tabs = [
    'Home',
    'Explore',

];

export function Navbar() {
    const theme = useMantineTheme();
    const [opened, { toggle }] = useDisclosure(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);

    const items = tabs.map((tab) => (
        <Tabs.Tab value={tab} key={tab}>
            {tab}
        </Tabs.Tab>
    ));


    return (
        <div>
            <div className={classes.header}>
                <Container className={classes.mainSection} size="md" color='blue' >
                    <Group justify="space-between">
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}><Text style={{ fontFamily: "monospace", fontStyle: "italic", fontWeight: "bold", fontSize: 30 }} >Tweet-Nest</Text><IconFeather color="#ffffff" size={40} /></div>
                        <Tabs
                            defaultValue="Home"
                            variant="outline"

                            classNames={{
                                root: classes.tabs,
                                list: classes.tabsList,
                                tab: classes.tab,
                            }}
                        >
                            <Tabs.List>{items}</Tabs.List>
                        </Tabs>


                        <Menu shadow="md" width={200}>
                            <Menu.Target>
                                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item leftSection={<IconHeart style={{ width: rem(14), height: rem(14) }} />}>
                                    Liked Posts
                                </Menu.Item>
                                <Menu.Item leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}>
                                    Your Comments
                                </Menu.Item>
                                <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                                    Account Settings
                                </Menu.Item>
                                <Menu.Item leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}>
                                    Logout
                                </Menu.Item>
                            </Menu.Dropdown></Menu>


                        <Menu
                            width={260}
                            position="bottom-end"
                            transitionProps={{ transition: 'pop-top-right' }}
                            onClose={() => setUserMenuOpened(false)}
                            onOpen={() => setUserMenuOpened(true)}
                            withinPortal
                        >
                            <Menu.Target>
                                <UnstyledButton
                                    className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                                >
                                    <Group gap={7}>
                                        <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                                        <Text fw={500} size="sm" lh={1} mr={3}>
                                            {user.name}
                                        </Text>
                                        <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                                    </Group>
                                </UnstyledButton>
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Menu.Item
                                    leftSection={
                                        <IconHeart
                                            style={{ width: rem(16), height: rem(16) }}
                                            color={theme.colors.red[6]}
                                            stroke={1.5}
                                        />
                                    }
                                >
                                    Liked posts
                                </Menu.Item>

                                <Menu.Item
                                    leftSection={
                                        <IconMessage
                                            style={{ width: rem(16), height: rem(16) }}
                                            color={theme.colors.blue[6]}
                                            stroke={1.5}
                                        />
                                    }
                                >
                                    Your comments
                                </Menu.Item>

                                <Menu.Label>Settings</Menu.Label>
                                <Menu.Item
                                    leftSection={
                                        <IconSettings style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                                    }
                                >
                                    Account settings
                                </Menu.Item>

                                <Menu.Item
                                    leftSection={
                                        <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                                    }
                                >
                                    Logout
                                </Menu.Item>
                                <Menu.Divider />
                            </Menu.Dropdown>
                        </Menu>
                    </Group>
                </Container>
            </div > </div>
    );
}