import React from 'react';
import "./Header.css"
import styled from "styled-components";
import {Button} from "@mui/material";

function Header(): JSX.Element {
    return (
        <Container>
            <Logo>
                <a href="#">
                    <img src="assets/images/tesla.svg" alt="Tesla logo"/>
                </a>
            </Logo>
            <MainMenu>
                <Button href="#">Model S</Button>
                <Button href="#">Model 3</Button>
                <Button href="#">Model X</Button>
                <Button href="#">Model Y</Button>
                <Button href="#">Solar Roof</Button>
                <Button href="#">Solar Panels</Button>
            </MainMenu>
            <SecondaryMenuGroup>
                <SecondaryMenu>
                    <Button href="#">Shop</Button>
                    <Button href="#">Account</Button>
                </SecondaryMenu>
                <SideMenu><Button href="#">Menu</Button></SideMenu>
            </SecondaryMenuGroup>
        </Container>
    );
}

const Container = styled.div`
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
`;

const Logo = styled.div`
  width: 120px;

  a {
    padding: 0 16px;
  }
`;

const MainMenu = styled.div`
  a {
    font-family: GothamBook, sans-serif;
    font-weight: 600;
    color: #393c41;
    text-transform: none;
    font-size: 14px;
    border-radius: 12px;
    padding: 4px 12px;


    &:hover {
      background: #becddb;

    }

  }

  @media (max-width: 768px) {
    display: none;
  }

`;

const SecondaryMenuGroup = styled.div`
  display: flex;
`;

const SecondaryMenu = styled(MainMenu)``;

const SideMenu = styled(MainMenu)`
  display: inline;
`;

export default Header;