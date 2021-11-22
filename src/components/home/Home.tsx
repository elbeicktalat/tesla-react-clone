import React from 'react';
import "./App.css";
import styled from "styled-components";

function Home(): JSX.Element {
    return (
        <Container className="Home">
            Home works fine!
        </Container>
    );
}

const Container = styled.div`
  height: 100vh;
`;

export default Home;