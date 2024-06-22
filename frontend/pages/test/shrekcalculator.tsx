import { Avatar, Button, Container, Grid, MantineStyleProp, MantineStyleProps, Text, Title } from "@mantine/core";
import { useState } from "react";

export default function ShrekCalculator() {

    //style for display
    const displaystyle: MantineStyleProp = {
        backgroundColor: "#d5de2e",
        border: "1px solid black",
        height: "250px",
        width: "80%",
        marginTop: "2rem"
    }

    //styling for buttons 
    const buttonsStyle: MantineStyleProp = {
        backgroundColor: "#668300",
        width: "80%"
    }

    //state set karo
    const [text, setText] = useState("");
    const buttonClick = (sym: string) => {
        if (sym === "=") {
            return setText(eval(text));
        }
        setText(text + sym);
    }

    const CalcButton = (txt: string) => (
        <Avatar onClick={() => buttonClick(txt)} size="xl" component="button" radius="xl" variant="filled" color="#523213" style={{ margin: "auto", border: "1px solid black" }} >
            <Text c="#d3cca5" size="xl" variant="h1">{txt}</Text>
        </Avatar>
    );

    return (
        <Container>
            <Container className="display" style={displaystyle}>
                <Title style={{ width: "100%", textAlign: "right" }}>{text}</Title>
            </Container>
            <Container className="buttons" style={buttonsStyle}>
                <Grid gutter="xl" justify="center" p="xl">
                    <Grid.Col span={3}>{CalcButton("7")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("8")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("9")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("/")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("4")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("5")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("6")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("*")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("1")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("2")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("3")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("-")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("0")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton(".")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("+")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("=")}</Grid.Col>
                    <Grid.Col span={6}><Button onClick={() => setText("")} size="xl" c="#d3cca5" bg="#523213" w="80%" radius="xl" mx="xl">CLR</Button></Grid.Col>
                    <Grid.Col span={6}><Button onClick={() => setText(text.slice(0, text.length - 1))} size="xl" c="#d3cca5" bg="#523213" w="80%" radius="xl" mx="xl">⌫</Button></Grid.Col>
                </Grid>
            </Container>
        </Container >
    );
}