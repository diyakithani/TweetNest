import { Anchor, Button, Checkbox, Group, TextInput, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from './formcomp.module.css';
import router from 'next/router';
import client from '@/utils/httpclient';

export function Formcomp() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            username: '',
            password: '',
            rememberme: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });
    function gotologin() {
        router.push("/test/login");
    }

    return (

        <div className={classes.form}>
            <form onSubmit={form.onSubmit(async (values) => {
                const res = await client.post('/auth/signup', { "username": values.username, "password": values.password, "email": values.email, "birthday": "2003/4/12", "pfp_path": "hello.jpg" }).then((res) => {
                    if (res.status === 200) {
                        console.log("user added to db slay");

                    }
                    else {
                        console.log(res);
                    }
                });

            })}>
                <TextInput
                    withAsterisk
                    label="Enter your Email Address"
                    placeholder="your@email.com"
                    key={form.key('email')}
                    {...form.getInputProps('email')}
                />
                <TextInput
                    withAsterisk
                    label="Enter your Username"
                    placeholder="randomchikibum@123"
                    key={form.key('username')}
                    {...form.getInputProps('username')}
                />
                <TextInput
                    withAsterisk
                    label="Enter your Password"
                    placeholder="user123"
                    key={form.key('password')}
                    {...form.getInputProps('password')}
                />

                <Checkbox
                    mt="md"
                    label="Remember Me"
                    key={form.key('rememberme')}
                    {...form.getInputProps('rememberme', { type: 'checkbox' })}
                />


                <Group justify="flex-start" mt="md">
                    <Button type="submit" onClick={gotologin} >Signup!</Button>
                </Group>


                <Text ta="center" mt="md">
                    Already have an account?{' '}
                    <Anchor<'a'> href="#" fw={700} onClick={gotologin}>
                        Login Now! :)
                    </Anchor>
                </Text>

            </form>
        </div>

    );
}