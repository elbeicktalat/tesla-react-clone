import React from 'react';
import "./Home.css";
import styled from "styled-components";
import Section from "../section/Section";

function Home(): JSX.Element {
    return (
        <Container className="Home">
                <Section
                    title="Model S"
                    subTitle="Order Online for"
                    subTitleLinkText="Touchless Delivery"
                    backgroundUrl="model-s.jpg"
                    firstButtonText="custom order"
                    secondButtonText="Existing inventory"
                    isFirst
                />
            <Section
                title="Model Y"
                subTitle="Order Online for"
                subTitleLinkText="Touchless Delivery"
                backgroundUrl="model-y.jpg"
                firstButtonText="custom order"
                secondButtonText="Existing inventory"
            />
            <Section
                title="Model 3"
                subTitle="Order Online for"
                subTitleLinkText="Touchless Delivery"
                backgroundUrl="model-3.jpg"
                firstButtonText="custom order"
                secondButtonText="Existing inventory"
            />
            <Section
                title="Model X"
                subTitle="Order Online for"
                subTitleLinkText="Touchless Delivery"
                backgroundUrl="model-x.jpg"
                firstButtonText="custom order"
                secondButtonText="Existing inventory"
            />
            <Section
                title="Solar Panels"
                subTitle="Lowest Cost Solar Panels in America"
                backgroundUrl="solar-panels.jpg"
                firstButtonText="Order now"
                secondButtonText="Learn more"
                />
                <Section
                    title="Solar Roof"
                    subTitle="Produce Clean Energy From Your Roof"
                    backgroundUrl="solar-roof.jpg"
                    firstButtonText="Order now"
                    secondButtonText="Learn more"
                />
                <Section
                    title="Accessories"
                    backgroundUrl="accessories.jpg"
                    firstButtonText="Shop now"
                />
        </Container>
    );
}

const Container = styled.div`
  height: 100vh;
`;

export default Home;