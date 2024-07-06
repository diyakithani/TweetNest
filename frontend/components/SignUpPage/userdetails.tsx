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
import classes from './userdetails.module.css';

export default function UserDetails() {
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={35}>
                <Title order={3} className={classes.title} ta="center" mt="md" p={0} mb={0}>
                    Welcome to Tweet-Nest!
                </Title>
                <Title order={4} className={classes.title} ta="center" mt="xs" mb={20}>
                    Enter your details!
                </Title>


                <TextInput label="Enter your Email Address" placeholder="benlovesworms@gmail.com" size="md" mb="md" />
                <TextInput label="Enter your Username" placeholder="ben_wormeater" size="md" mb="md"></TextInput>
                <PasswordInput label="Enter your Password" placeholder="iloveworms" size="md" mb="md" />
                <Checkbox label="Remember me" mb="md" size="md" />
                <Button fullWidth mt="lg" size="md">
                    Sign Up to Tweet-Nest🎉
                </Button>

                <Text ta="center" mt="md">
                    Already have an account?{' '}
                    <Anchor<'a'> href="#" fw={700} onClick={(event) => event.preventDefault()}>
                        Login Now! :)
                    </Anchor>
                </Text>
            </Paper>
        </div >
    );
}