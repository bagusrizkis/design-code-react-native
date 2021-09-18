import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import styled from "styled-components";
import avatarImage from "./assets/avatar.jpg";
import Card from "./components/Card";
import { NotificationIcon } from "./components/Icons";
import Logo from "./components/Logo";

export default function App() {
    return (
        <Container>
            <SafeAreaView>
                <ScrollView>
                    <TitleBar>
                        <Avatar source={avatarImage} />
                        <Title>Welcome back,</Title>
                        <Name>Rizki</Name>
                        <NotificationIcon
                            style={{ position: "absolute", right: 20, top: 5 }}
                        />
                    </TitleBar>
                    <ScrollView
                        contentContainerStyle={{
                            padding: 20,
                            paddingLeft: 12,
                            paddingTop: 30,
                        }}
                        style={{
                            flexDirection: "row",
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {logos.map(({ image, text }, index) => {
                            return (
                                <Logo key={index} image={image} text={text} />
                            );
                        })}
                    </ScrollView>
                    <Subtitle>Continue Learning</Subtitle>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 30 }}
                    >
                        {cards.map((card, index) => {
                            return (
                                <Card
                                    key={index}
                                    title={card.title}
                                    image={card.image}
                                    logo={card.logo}
                                    caption={card.caption}
                                    subtitle={card.subtitle}
                                />
                            );
                        })}
                    </ScrollView>
                    <StatusBar style="auto" />
                </ScrollView>
            </SafeAreaView>
        </Container>
    );
}

const Subtitle = styled.Text`
    color: #b8bece;
    font-weight: 600;
    font-size: 15px;
    margin-left: 20px;
    margin-top: 10px;
    text-transform: uppercase;
`;

const Container = styled.View`
    flex: 1;
    background-color: #f0f3f5;
`;

const Title = styled.Text`
    font-size: 16px;
    color: #b8bece;
    font-weight: 500;
`;

const Name = styled.Text`
    font-size: 20px;
    color: #3c4560;
    font-weight: bold;
`;

const TitleBar = styled.View`
    width: 100%;
    margin-top: 50px;
    padding-left: 80px;
`;

const Avatar = styled.Image`
    width: 44px;
    height: 44px;
    background: black;
    border-radius: 22px;
    margin-left: 20px;
    position: absolute;
    top: 0;
    left: 0;
`;

const logos = [
    {
        image: require("./assets/logo-framerx.png"),
        text: "Framer X",
    },
    {
        image: require("./assets/logo-figma.png"),
        text: "Figma",
    },
    {
        image: require("./assets/logo-studio.png"),
        text: "Studio",
    },
    {
        image: require("./assets/logo-react.png"),
        text: "React",
    },
    {
        image: require("./assets/logo-swift.png"),
        text: "Swift",
    },
    {
        image: require("./assets/logo-sketch.png"),
        text: "Sketch",
    },
];

const cards = [
    {
        title: "React Native for Designers",
        image: require("./assets/background11.jpg"),
        subtitle: "React Native",
        caption: "1 of 12 Sections",
        logo: require("./assets/logo-react.png"),
    },
    {
        title: "Styled Components",
        image: require("./assets/background12.jpg"),
        subtitle: "React Native",
        caption: "1 of 12 Sections",
        logo: require("./assets/logo-react.png"),
    },
    {
        title: "Props and Icons",
        image: require("./assets/background13.jpg"),
        subtitle: "React Native",
        caption: "1 of 12 Sections",
        logo: require("./assets/logo-react.png"),
    },
    {
        title: "Static Data and Loop",
        image: require("./assets/background14.jpg"),
        subtitle: "React Native",
        caption: "1 of 12 Sections",
        logo: require("./assets/logo-react.png"),
    },
];
