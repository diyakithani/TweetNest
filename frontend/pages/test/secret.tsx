import { Container, Title, Divider, Textarea, Blockquote } from '@mantine/core';
import { IconLanguage } from '@tabler/icons-react';
import { useState } from 'react';

export default function SecretLang() {
    const [text, setText] = useState("");

    const encode = (text: string) => text.replace(/\s+/g, " ").split(" ").map(word =>
        word.slice(undefined, word.length / 2) + "nte" + word.slice(word.length / 2)
    ).join(" ");

    return (
        <Container>
            <Title>Shhhhhhh 🤫</Title>
            <Divider my="md" />
            <Textarea
                label="Text"
                // description="Input description"
                placeholder="Enter some text ..."
                value={text}
                onChange={(e) => setText(e.currentTarget.value)}
            />
            <Blockquote color="blue" cite="– Diya Kithani" icon={<IconLanguage />} mt="xl">
                {encode(text)}
            </Blockquote>
        </Container>
    );
}