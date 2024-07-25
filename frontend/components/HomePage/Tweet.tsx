import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import {
    Card,
    Image,
    Text,
    ActionIcon,
    Group,
    Avatar,
    useMantineTheme,
    Paper,
} from '@mantine/core';
import classes from './Tweet.module.css';
import { Post, User } from '@/utils/types';
import { useCurrentUser } from '@/utils/hooks';

export type TweetProps = {
    post: Post;

}


export default function Tweet({ post, }: TweetProps) {
    const theme = useMantineTheme();
    const myuser = useCurrentUser();

    return (
        <Card key={post.post_id} withBorder className={classes.card} m="md" p="0" pb="10px" radius="md" bg="lightgray">
            <Group justify="start" bg="#1DA1F2" h="35px">
                <Avatar
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                    size={35}
                    radius="sm"
                    mr="0"
                    m={0}
                    p={0}
                />
                <Text fz="lg" m={0} style={{ fontFamily: "monospace", fontWeight: "bolder" }}>
                    someone
                </Text>
            </Group>

            <Card.Section mt="0">
                <Image src="https://i.imgur.com/Cij5vdL.png" height={180} style={{ objectFit: 'contain' }} />
            </Card.Section>


            <Paper bg="lightgray" style={{ fontWeight: "bolder" }} radius="0" h="100%">
                {post.content} </Paper>


            <Group justify="flex-start" className={classes.footer} >
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
        </Card>

    );
}      