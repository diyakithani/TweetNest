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
import { useState } from 'react';
import client from '@/utils/httpclient';
import { useRouter } from 'next/router';

export default function Auth() {
    function signup() {
        router.push("/test/signup");



    }
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    async function login() {
        const res = await client.post("/auth/login", { "username": username, "password": password });
        if (res.status === 200) {
            router.push("/home");
        }
        else {
            setUsername("");
            setPassword("");
            alert("Invalid info bruh");
        }

    }
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Welcome back to Tweet-Nest!
                </Title>

                <TextInput label="Enter your Username" placeholder="ben_wormeater" size="md" onChange={(event) => setUsername(event.currentTarget.value)} value={username} />
                <PasswordInput label="Enter your Password" placeholder="iloveworms" mt="md" size="md" onChange={(event) => setPassword(event.currentTarget.value)} value={password} />
                <Checkbox label="Keep me logged in" mt="xl" size="md" />
                <Button fullWidth mt="xl" size="md" onClick={login}>
                    Login
                </Button>

                <Text ta="center" mt="md">
                    Don&apos;t have an account?{' '}
                    <Anchor<'a'> href="#" fw={700} onClick={() => signup()}>
                        Sign-Up Now! :)
                    </Anchor>
                </Text>
            </Paper>
        </div>
    );
}