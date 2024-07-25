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
import router, { useRouter } from 'next/router';
import { useState } from 'react';
import client from '@/utils/httpclient';
import { Formcomp } from './formcomp';

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

                <Formcomp ></Formcomp>
            </Paper>
        </div >
    );
}