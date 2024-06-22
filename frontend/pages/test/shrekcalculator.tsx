import { Avatar, Container, Grid, MantineStyleProp, MantineStyleProps, Text } from "@mantine/core";

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

    //state something




    const CalcButton = (txt: string) => (
        <Avatar size="xl" component="button" radius="xl" variant="filled" color="#523213" style={{ margin: "auto", border: "1px solid black" }} >
            <Text c="#d3cca5" size="xl" variant="h1">{txt}</Text>
        </Avatar>
    );

    return (
        <Container>

            <Container className="display" style={displaystyle}>

            </Container>
            <Container className="buttons" style={buttonsStyle}>

                <Grid gutter="xl" justify="center">
                    <Grid.Col span={3}>{CalcButton("7")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("8")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("9")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("/")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("4")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("5")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("6")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("x")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("1")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("2")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("3")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("-")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("0")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton(".")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("+")}</Grid.Col>
                    <Grid.Col span={3}>{CalcButton("=")}</Grid.Col>
                </Grid>


            </Container>



        </Container >

    );


}