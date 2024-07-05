import {
    Paper,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
} from '@mantine/core';
import classes from './auth.module.css';

export default function Auth() {
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Welcome back to Tweet-Nest!
                </Title>

                <TextInput label="Enter your Username" placeholder="ben_wormeater" size="md" />
                <PasswordInput label="Enter your Password" placeholder="iloveworms" mt="md" size="md" />
                <Checkbox label="Keep me logged in" mt="xl" size="md" />
                <Button fullWidth mt="xl" size="md">
                    Login
                </Button>

                <Text ta="center" mt="md">
                    Don&apos;t have an account?{' '}
                    <Anchor<'a'> href="#" fw={700} onClick={(event) => event.preventDefault()}>
                        Sign-Up Now! :)
                    </Anchor>
                </Text>
            </Paper>
        </div>
    );
}