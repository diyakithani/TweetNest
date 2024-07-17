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
import { useGetPosts } from '@/utils/hooks';

export default function Tweet() {
    const posts = useGetPosts();
    console.log(posts);

    const linkProps = { href: '', target: '_blank', rel: 'noopener noreferrer' };
    const theme = useMantineTheme();

    return (
        <>
            {posts.map((post) => (
                <Card key={post.post_id} withBorder className={classes.card} m="md" pt={0} pl={0}>
                    <Group justify="start" bg="#1DA1F2">
                        <Avatar
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                            size={35}
                            radius="sm"
                            mr="0"
                            m={0}
                            p={0}
                        />
                        <Text fz="lg" m={0}>
                            Bill Wormeater
                        </Text>
                    </Group>

                    <Card.Section inheritPadding mt="0">
                        <Image src="https://i.imgur.com/Cij5vdL.png" height={180} style={{ objectFit: 'contain' }} />
                    </Card.Section>

                    <Text fz="sm" c="dimmed" lineClamp={4}>
                        {post.content} {/* Use post.content instead of posts[0].content */}
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
                </Card>
            ))}
        </>
    );
}      