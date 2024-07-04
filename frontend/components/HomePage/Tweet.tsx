import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import {
    Card,
    Image,
    Text,
    ActionIcon,
    Group,
    Avatar,
    useMantineTheme,
} from '@mantine/core';
import classes from './Tweet.module.css'; // Adjust the path as per your project structure

export default function Tweet() {
    const linkProps = { href: '', target: '_blank', rel: 'noopener noreferrer' };
    const theme = useMantineTheme();

    return (
        <Card withBorder className={classes.card} m="lg">
            <Group justify="start" bg="#1DA1F2" >
                <Avatar
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                    size={35}
                    radius="sm"
                    mr="xs"
                    m={0}
                    p={0}
                />
                <Text fz="md" m={0}>
                    Bill Wormeater
                </Text>
            </Group>

            <Card.Section inheritPadding mt="xs">
                <Image src="https://i.imgur.com/Cij5vdL.png" height={180} style={{ objectFit: 'contain' }} />
            </Card.Section>

            <Text className={classes.title} fw={500} component="a" {...linkProps}>
                Resident Evil Village review
            </Text>

            <Text fz="sm" c="dimmed" lineClamp={4}>
                Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its
                predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re
                now dealing with more occult enemies like werewolves and vampires.
            </Text>

            <Group justify="flex-start" className={classes.footer}>
                <ActionIcon className={classes.action}>
                    <IconHeart style={{ width: '1rem', height: '1rem' }} color={theme.colors.red[6]} />
                </ActionIcon>
                <ActionIcon className={classes.action}>
                    <IconBookmark style={{ width: '1rem', height: '1rem' }} color={theme.colors.yellow[7]} />
                </ActionIcon>
                <ActionIcon className={classes.action}>
                    <IconShare style={{ width: '1rem', height: '1rem' }} color={theme.colors.blue[6]} />
                </ActionIcon>
            </Group>
        </Card >
    );
}
